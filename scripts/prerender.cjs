/* Render the same React components at build time; no parallel SEO-only content. */
process.env.NODE_ENV = 'production';
const fs = require('fs');
const path = require('path');
const src = path.resolve(__dirname, '../src');
const babel = require(require.resolve('@babel/core', { paths: [require.resolve('react-scripts/package.json')] }));
const original = require.extensions['.js'];
require.extensions['.css'] = () => {};
require.extensions['.svg'] = (module, filename) => { module.exports = filename; };
require.extensions['.js'] = (module, filename) => {
  if (!filename.startsWith(src + path.sep)) return original(module, filename);
  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename, babelrc: false, configFile: false,
    presets: [
      [require.resolve('@babel/preset-env'), { targets: { node: 'current' } }],
      [require.resolve('@babel/preset-react'), { runtime: 'automatic' }]
    ]
  });
  module._compile(code, filename);
};
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/App').default;
const { caseStudies, notes } = require('../src/contentData');
const origin = 'https://www.harshvardhanpatil.in';
const template = fs.readFileSync(path.resolve('build/index.html'), 'utf8');
const escape = value => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pages = [
  { route: '/', file: 'index.html' },
  ...caseStudies.map(p => ({ ...p, route: `/projects/${p.slug}/`, file: `projects/${p.slug}/index.html`, type: 'CreativeWork' })),
  ...notes.map(p => ({ ...p, route: `/notes/${p.slug}/`, file: `notes/${p.slug}/index.html`, type: 'Article' })),
  { route: '/404', file: '404.html', title: 'Page not found', description: 'Return to Harshvardhan Patil’s portfolio.', noindex: true }
];
for (const page of pages) {
  let html = template.replace('<div id="root"></div>', () => `<div id="root">${renderToString(React.createElement(App, { pathname: page.route }))}</div>`)
    .replace(/<noscript>.*?<\/noscript>/, '')
    .replace(/<link rel="icon" href="icon.ico"\s*\/?\s*>/, '<link rel="icon" href="/icon.ico"/>');
  if (page.title) {
    const title = `${page.title} | Harshvardhan Patil`;
    html = html.replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(page.description)}`)
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${origin}${page.route}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${origin}${page.route}`)
      .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${escape(title)}`)
      .replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*/g, `$1${escape(page.description)}`)
      .replace(/(<meta property="og:type" content=")[^"]*/, '$1article');
    const schema = page.noindex ? null : {
      '@context': 'https://schema.org', '@type': page.type,
      '@id': origin + page.route + '#content', url: origin + page.route,
      name: page.title, description: page.description,
      author: { '@type': 'Person', '@id': origin + '/#person', name: 'Harshvardhan Patil', url: origin + '/' },
      ...(page.type === 'Article' ? { headline: page.title, datePublished: '2026-10-06', dateModified: '2026-10-06' } : {})
    };
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schema ? `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>` : '');
  }
  if (page.noindex) html = html.replace('index, follow, max-image-preview:large', 'noindex, follow');
  const filename = path.resolve('build', page.file);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, html);
}
fs.writeFileSync(path.resolve('build/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p => !p.noindex).map(p => `  <url><loc>${origin}${p.route}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Pre-rendered ${pages.length} pages from React components.`);
