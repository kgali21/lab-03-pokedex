import Apps from './App.js';

const root = document.getElementById('root');
const app = new Apps();

const dom = app.renderDOM();

root.appendChild(dom);