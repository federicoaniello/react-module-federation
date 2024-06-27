import React from 'react';
import Header from './components/Header';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'))
root.render(<Header />);
