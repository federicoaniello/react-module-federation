import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

const root = document.getElementById('root');

hydrateRoot(root, <BrowserRouter><App /></BrowserRouter>);
