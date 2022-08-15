import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  {id: "todo-0", name:"watch Your Lie in April", completed: true},
  {id: "todo-1", name:"study Japanese", completed: false},
  {id: "todo-2", name:"cook dinner", completed: true},
  {id: "todo-3", name:"study web dev stuff", completed: false}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);

