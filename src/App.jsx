import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let userNmae ="amichy"
function App() {
  const [tweet , setTweet] =useState("")
  const [tweets , setTweets] = useState([]);

  return (
    <>
           <div className='container-tweeter'>
                    <input className='input-post' type="text" />
                    <button className='btnSharePost'>Tweet</button>
           </div>
    </>
  )
}

export default App
