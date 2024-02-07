import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { TodoWrapper } from './components/Elements/TodoWrapper';

const App = () => {
  return (
    <div className="flex justify-center pt-32 w-full min-h-screen bg-slate-700">
      <TodoWrapper />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </HashRouter>,
);
