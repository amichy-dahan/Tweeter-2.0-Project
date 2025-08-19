import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tweeter from './components/Tweeter';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import { TweetsProvider } from "./context/TweetsProvider";
import { AuthenticationImage } from './components/AuthenticationImage';
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
 const [userName, setUserName] = useState("null")

  function changeUser(name) {
    setUserName(name);
  }
  return (
    
      <BrowserRouter basename="/Tweeter-2.0-Project">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {    userName !== "null" &&
              <Navbar onChangeUser={changeUser}  />
              
         }

        <TweetsProvider>  
          <Routes>
            <Route path="/" element={<AuthenticationImage onChanger={changeUser}/>} />
            <Route path="/tweeter" element={<ProtectedRoute name = {userName}><Tweeter name={userName} /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute name = {userName}><Profile name={userName} onChange={changeUser} /></ProtectedRoute>} />
          </Routes>
        </TweetsProvider>
        </MantineProvider>
      </BrowserRouter>
  
  );
}

export default App;
