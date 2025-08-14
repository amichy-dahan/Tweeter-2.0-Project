import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tweeter from './components/Tweeter';
import "./App.css";
import Profile from './components/Profile';
import Navbar from './components/Navbar';

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo";
function App() {
  return(
    <>
   
      <BrowserRouter>
       <Navbar/>
      <Routes>
        
        <Route path="/" element={<Tweeter/>} />
        <Route path="/profile" element={<Profile/>} />

       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
