import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search-page/SearchPage';
import HotelsListPage from './pages/list-hotel-page/HotelsListPage';
import HotelDeatailsPage from './pages/hotel-details-page/HotelDeatailsPage';
import BookingPage from './pages/booking-page/BookingPage';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/hotels-list' element={<HotelsListPage />} />
        <Route path='/hotels-list/:id' element={<HotelDeatailsPage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
  );
}

export default App;
