import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search-page/SearchPage';
import HotelsListPage from './pages/list-hotel-page/HotelsListPage';
import HotelDeatailsPage from './pages/hotel-details-page/HotelDeatailsPage';
import BookingPage from './pages/booking-page/BookingPage';
import BookingHistoryPage from './pages/booking-history-page/BookingHistoryPage';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/hotels-list/:direction' element={<HotelsListPage />} />
        <Route path='/hotel-details/:hotelId' element={<HotelDeatailsPage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/booking-history' element={<BookingHistoryPage/>} />
      </Routes>
  );
}

export default App;
