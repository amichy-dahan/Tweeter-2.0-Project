
import { useState } from 'react';
import { supabase } from '../SupaBase';
import './AuthenticationImage.css';
import { useNavigate } from 'react-router-dom';

export function AuthenticationImage({onChanger }) {
  const navigate =useNavigate();
  const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
      const [loading, setLoading] = useState(false);

 async function onBtn(){
  try{
     const user = await supabase.auth.signInWithPassword({email:email ,password:password})
      if(user.data.user){
        let res = user.data.user.email.split('@')[0];
        onChanger(res);
        navigate("/tweeter")
      } else{
        setEmail("")
        setPassword("")
        alert("uncorrect details")
        navigate("/")
      }
  } 
  catch(err){
    alert("not exit")
  }
    
    let { data: Tweets, error } = await supabase
  .from('Tweets')
  .select('*');
  console.log(Tweets);
    console.log(error);
  }
  return (
    <>
      <div className='container-login'>

        <div className='container-inBt'>
          <h1>Welcome</h1>

          <label className='lab'  htmlFor="">Please sign in <br></br><input  value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className='in1'/></label>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Passwords' className='in2' />
          <button onClick={onBtn}  className='btnLogin'>
             Sign in
          </button>
        </div>


      </div>
    </>
  );
}