import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search-page/SearchPage';
import HotelsListPage from './pages/list-hotel-page/HotelsListPage';
import HotelDeatailsPage from './pages/hotel-details-page/HotelDeatailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/hotels-list' element={<HotelsListPage />} />
        <Route path='/hotels-list/:id' element={<HotelDeatailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
