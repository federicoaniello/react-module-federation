import React from 'react';
import Header from './components/Header';
import { createRoot } from 'react-dom/client';


const App = () => <Header />;


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(App)
