import React from 'react';
import LandingPage from './components/LandingPage';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'))
root.render(<LandingPage />);
