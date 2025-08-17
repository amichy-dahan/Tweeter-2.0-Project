import { useEffect, useState } from 'react'

import '../App.css'


import xImage from '../x.jpg';
import Tweet from '../components/Tweet';
import axios from 'axios';
import Navbar from './Navbar';



const API_URL = "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo";
function Tweeter({name}) {
  const [content, setContent] = useState("")
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  

//   useEffect(() => {
//     const listTweet = localStorage.getItem("tweets")
//     console.log(listTweet)
//     if (listTweet !== "[]") {
//       setTweets(JSON.parse(listTweet));
//     }
//   }, [])
//   useEffect(() => {
//     localStorage.setItem("tweets", JSON.stringify(tweets))
//   }, [tweets])

   useEffect(() => {
   async function axoisGet(){
     const response = await axios("https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo");
     setTweets(response.data)
    }
    axoisGet();
  }, [])



  async function handeleTwet() {
    setTweets([
      ...tweets,
      {
        userName: name,
        content: content,
        date: new Date().toLocaleDateString()
      }
    ]);
    setContent("");
    //  if (!tweet.trim()) return; // לא שולח אם אין טקסט
    setLoading(true);

    // try {
    //   const newTweet = {
    //     content: tweet,
    //     userName: name,
    //     date: new Date().toISOString(),
    //   };

    //   await axios.post(API_URL, newTweet, {
    //     headers: {
    //       apikey: API_KEY,
    //       Authorization: `Bearer ${API_KEY}`,
    //       "Content-Type": "application/json",
    //       Prefer: "return=representation",
    //     },
    //   });

 
    //   setTweet(""); 
    // } catch (error) {
      
    //   console.error(error);
    // }

    setLoading(false);
  }

  return (
    <>
   <div className='head-container'>
      <div className='container-x'>
       
        <img className='xImge' src={xImage} />
      </div>
   <button  onClick={()=> localStorage.removeItem('tweets')}>clear local storage</button>
      <div className='container-tweeter'>
        <textarea
          className='input-post'
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What you Have in mind .."
        />
        {
          content.length > 140 ? 
          <div className='errChar'>
            this tweet can't cotain more then 140 chars 
          </div> :<div className={loading?'sendChar':""}>
            { loading ? "send..." : ""}
          </div>
          
          
        }
        <button disabled={content.length > 140 || content.length === 0} className={content.length <= 140 ? 'btnSharePost' : 'disable'} onClick={handeleTwet}>
          <img className='xImge-b' src={xImage} alt="tweet" />
        </button>
      </div>

      <div className='containerOfTweets'>{tweets.map((t, index) => (
        <Tweet key={index} props={t} />
         
      ))
      }</div>
   </div>
    </>
  )
}

export default Tweeter;
