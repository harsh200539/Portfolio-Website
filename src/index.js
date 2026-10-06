import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const app = <App pathname={window.location.pathname} />;
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
