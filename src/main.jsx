import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { TodoWrapper } from './components/Elements/TodoWrapper';

function App() {
  return (
    <div className='flex justify-center pt-32 w-full min-h-screen bg-slate-700'>
      <TodoWrapper />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
