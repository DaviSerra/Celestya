import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Router from './Router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </StrictMode>
);
