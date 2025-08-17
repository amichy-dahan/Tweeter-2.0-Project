import { Button, Input, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../components/Profile.css'

function Profile({name , onChange}) {
    const [inputChange, setInputChange] = useState("")
     
    function onBtn (){
      onChange(inputChange);
      setInputChange("");
    }
return (
   <>

   <div className='profile-cont'>
  
   <h1 className='title'>Profile</h1>

 <Stack spacing="md" style={{ maxWidth: 400, margin: ' auto' }}>
     
        <TextInput
        label="User Name"
        placeholder={name}
        inputWrapperOrder={['label', 'error', 'input', 'description']}
        value={inputChange}
        onChange={(e)=>setInputChange(e.target.value)}
        
      />

      <Button onClick={onBtn}>Save</Button>
    </Stack>   
     </div>
   </>
)


}
export default Profile;