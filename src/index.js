import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Assurez-vous que le fichier CSS global est importé
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
