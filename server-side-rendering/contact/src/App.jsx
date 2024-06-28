import React from 'react';
import Contact from './components/Contact';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'))
root.render(<Contact />);
