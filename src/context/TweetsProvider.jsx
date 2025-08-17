import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const API_URL = "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo";
export const TweetsContext = createContext();

export function TweetsProvider({ children }) {

    const [tweets, setTweets] = useState([]);
    async function addTweet(newTweet) {
        setTweets(prev => [...prev, newTweet]);
        try {
            await axios.post(API_URL, newTweet, {
                headers: {
                    apikey: API_KEY,
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                    Prefer: "return=representation",
                },
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchTweets() {
        const res = await axios.get("https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo");
        setTweets(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        fetchTweets();
        const intervalId = setInterval(fetchTweets, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <TweetsContext.Provider value={{ tweets, addTweet }}>
            {children}
        </TweetsContext.Provider>
    );
}
export function useTweets() {
    return useContext(TweetsContext);
}