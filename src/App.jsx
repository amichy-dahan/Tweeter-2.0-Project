import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import xImage from './x.jpg';
import Tweet from './components/Tweet';


let userName = "amichy"
function App() {
  const [tweet, setTweet] = useState("")
  const [tweets, setTweets] = useState([]);


  useEffect(() => {
    const listTweet = localStorage.getItem("tweets")
    console.log(listTweet)
    if (listTweet !== "[]") {
      setTweets(JSON.parse(listTweet));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets))

  }, [tweets])


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
   <button  onClick={()=> localStorage.removeItem('tweets')}>clear local storage</button>
      <div className='container-tweeter'>
        <textarea
          className='input-post'
          rows="10"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What you Have in mind .."
        />
        {
          tweet.length > 140 ? 
          <div className='errChar'>
            this tweet can't cotain more then 140 chars 
          </div> : ""
        }
        <button disabled={tweet.length > 140 || tweet.length === 0} className={tweet.length <= 140 ? 'btnSharePost' : 'disable'} onClick={handeleTwet}>
          <img className='xImge-b' src={xImage} alt="tweet" />
        </button>
      </div>

      <div className='containerOfTweets'>{tweets.map((t, index) => (
        <Tweet key={index} props={t} />

      ))
      }</div>

    </>
  )
}

export default App
