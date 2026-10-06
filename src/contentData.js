export const faqs = [
  ['Who is Harshvardhan Patil?', 'Harshvardhan Patil is a full stack and automation developer in Vadodara, Gujarat, India. At LINQ Corporate Solutions, he works on event websites, CRM systems, booking and reporting workflows using React, Django and Python.'],
  ['What does Harshvardhan specialize in?', 'His work focuses on React and Next.js interfaces, Django REST APIs, CRM development and AI-assisted workflow automation. Projects include conference operations, reporting, realtime collaboration and source-linked monitoring dashboards.'],
  ['What CRM experience does Harshvardhan have?', 'He develops LINQ CRM for conference operations, covering events, bookings, invoices, delegates and reporting. His work includes role-based permissions, imports, APIs and workflow integrations. Internal business data and private source code are not published in this portfolio.'],
  ['How can I contact Harshvardhan?', 'For a developer role or a project, email hpatil1704@gmail.com or use the contact form below. His resume, LinkedIn profile and public GitHub repositories provide further background.']
];

export const caseStudies = [
  {
    slug: 'linq-crm', title: 'LINQ CRM — Event Booking System',
    description: 'Event booking, invoice, delegate and reporting workflows developed by Harshvardhan Patil at LINQ Corporate Solutions.',
    stack: ['React', 'Django', 'Python', 'PostgreSQL', 'REST APIs'],
    problem: 'Conference operations connect event websites, delegate records, invoices, payment updates and reporting. Staff need a consistent way to manage those records and access the events assigned to them.',
    contribution: 'My work covers React interfaces, Django APIs, booking and reporting workflows, imports and role-based permissions. The public overview describes the workflow without publishing internal customer data or private code.',
    decisions: [['Invoice-level records', 'An invoice groups the booking and its delegates, keeping payment and reporting context together.'], ['Role-based access', 'Administrative and sales workflows have different access requirements. API-side permissions and scoped records support those boundaries.'], ['Reporting and integrations', 'Operational records feed reporting workflows; external integrations need controlled access and an audit trail.']],
    status: 'Professional internal project. Implementation details and a sanitized walkthrough are available on request. No benchmark or business-impact figures are claimed here.',
    evidence: 'The portfolio and resume describe my contribution. Private production records and screenshots are intentionally excluded.',
    article: '/notes/booking-workflows/'
  },
  {
    screenshot: '/project-images/signaldesk.jpg',
    slug: 'signaldesk', title: 'SignalDesk — NSE Watch',
    description: 'A source-linked NSE company monitoring dashboard by Harshvardhan Patil, using Next.js, TypeScript and Supabase.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'NSE RSS'],
    problem: 'Following selected companies requires separating source filings from interpretation and recognizing when a feed is stale or unavailable.',
    contribution: 'My work focuses on a Next.js dashboard, scheduled feed ingestion, company selection and evidence links. Feed-health visibility helps readers assess how current the displayed information is.',
    decisions: [['Source-linked evidence', 'Filing links let a reader inspect the original material rather than rely only on a generated summary.'], ['Scheduled ingestion', 'Feed updates and the dashboard are separate concerns. Availability and timing depend on the source and deployment configuration.'], ['Visible limitations', 'Alerts and analysis require additional configuration. A dashboard should make those dependencies clear.']],
    status: 'Personal family dashboard. Source availability, configuration and refresh timing affect coverage; it is not a guaranteed realtime market feed.',
    evidence: 'Public repository and deployed dashboard. Review source timestamps and feed-health information when assessing a filing.',
    github: 'https://github.com/harsh200539/signaldesk-nse-watch', live: 'https://signaldesk-nse-watch.vercel.app/',
    article: '/notes/source-linked-monitoring/'
  },
  {
    screenshot: '/project-images/orbit-watch-room.jpg',
    slug: 'orbit-watch-room', title: 'Orbit Watch Room',
    description: 'A collaborative watch-room project by Harshvardhan Patil with WebRTC screen sharing, voice and realtime signaling.',
    stack: ['WebRTC', 'Supabase Realtime', 'Three.js', 'JavaScript'],
    problem: 'A small group needs a shared room for communication and screen sharing, with an invitation flow and understandable connection state.',
    contribution: 'My work focuses on peer-to-peer media, realtime room signaling and a Three.js entrance. The application combines invite codes, voice chat, screen sharing and opt-in approximate location markers.',
    decisions: [['Separate signaling and media', 'Realtime signaling coordinates the room while WebRTC handles peer media. These layers have different failure modes.'], ['Browser permission boundaries', 'Screen and microphone access depend on user permission and browser support. Joining a room does not imply successful media access.'], ['Optional location', 'Approximate location markers are opt-in rather than a prerequisite for participating.']],
    status: 'Independent collaboration project. Connection quality depends on browser permissions, network conditions and deployment configuration.',
    evidence: 'Public repository and live application provide implementation and interaction evidence. No concurrent-user or latency benchmark is claimed.',
    github: 'https://github.com/harsh200539/orbit-watch-room', live: 'https://orbit-watch-room.vercel.app/'
  }
];

export const notes = [
  { slug: 'booking-workflows', title: 'Designing invoice and delegate workflows', description: 'Engineering considerations from Harshvardhan Patil’s work on conference booking and CRM workflows.', intro: 'In my conference CRM work, an invoice and a delegate answer different questions. The invoice represents the booking and payment context; a delegate represents a person attending. Keeping that distinction explicit makes operations screens easier to reason about.', sections: [['Keep the booking context visible', 'A delegate view should retain the invoice and event context. When staff open an invoice, showing its sibling delegates helps them understand the whole booking.'], ['Enforce access in the API', 'Hiding a control in the interface is not sufficient permission enforcement. Assigned-event scoping and allowed updates also belong in the API.'], ['Treat imports as reconciliation', 'Imported records need identifiers and a clear duplicate policy. Validate against the destination model and record failures so corrections are traceable.']], project: '/projects/linq-crm/' },
  { slug: 'source-linked-monitoring', title: 'Keeping monitoring dashboards tied to their sources', description: 'Source attribution, refresh status and configuration boundaries in Harshvardhan Patil’s SignalDesk project.', intro: 'In SignalDesk, the useful unit is a filing with a source link and enough context to inspect it. A summary helps navigation, but the original material is the evidence.', sections: [['Distinguish source time from fetch time', 'A filing’s publication time and the time a feed was fetched answer different questions. A clear dashboard should preserve the distinction rather than imply every displayed item is newly published.'], ['Make stale feeds visible', 'An empty feed is not proof that nothing happened. Showing feed health gives readers a way to distinguish silence from a retrieval problem.'], ['Keep analysis separate from evidence', 'Interpretation should point back to the source and expose its configuration requirements. A generated explanation should not silently replace the original filing.']], project: '/projects/signaldesk/' }
];
