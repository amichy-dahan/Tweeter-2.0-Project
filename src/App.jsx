import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tweeter from './components/Tweeter';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';

function App() {
  const [userName,setUserName] = useState("amichy")

  function changeUser(name){
    setUserName(name);
  }
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tweeter name={userName} />} />
          <Route path="/profile" element={<Profile name={userName} onChange={changeUser}/>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
