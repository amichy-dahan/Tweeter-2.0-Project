import { Button, Input, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../components/Profile.css'

function Profile({ name, onChange }) {
  const [inputChange, setInputChange] = useState("")

  function onBtn() {
    onChange(inputChange);
    setInputChange("");
  }
  return (
    <>

      <div className='profile-cont'>

        <h1 className='title'>Profile : Hello {name}</h1>

        <div className='inBt'>
          <input
            placeholder={name}
            value={inputChange}
            className='change-user'
            onChange={(e) => setInputChange(e.target.value)}
          />
          <button className='btn' onClick={onBtn}>Save</button>
        </div>
      </div>
    </>
  )


}
export default Profile;