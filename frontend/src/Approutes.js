import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';

export default function Approutes() {
    return (
        <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/search/:searchTerm" element={<Homepage />} />
        </Routes>
    );
}
