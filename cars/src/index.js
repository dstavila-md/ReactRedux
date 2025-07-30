import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const htmlElement = document.getElementById('root');
const root = createRoot(htmlElement);

root.render(<App />);
