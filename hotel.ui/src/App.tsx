import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search-page/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
