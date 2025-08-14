import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import xImage from './x.jpg';


let userName = "amichy"
function App() {
  const [tweet, setTweet] = useState("")
  const [tweets, setTweets] = useState([]);


  function handeleTwet() {
    setTweets([
      ...tweets,
      {
        name: userName,
        text: tweet,
        date: new Date().toLocaleDateString()
      }
    ]);
    setTweet("");
  }

  return (
    <>
      <div className='container-x'>
        <img className='xImge' src={xImage} />
      </div>
      {console.log(tweets)}
      <div className='container-tweeter'>
        <textarea
          className='input-post'
          rows="10"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What you Have in mind .."
        />
        <img onClick={handeleTwet} className='btnSharePost' src={xImage} />
      </div>
      

      <div>fsdfs</div>
    </>
  )
}

export default App
