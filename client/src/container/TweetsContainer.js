import React, { useState, useEffect } from 'react';
import Tweets from '../components/Tweets';
import TweetModel from '../models/tweet';


const TweetsContainer = () => {
    const [tweets, setTweets] = useState([]);

    const fetchTweets= async () => {
        TweetModel.all().then(res => {
            console.log(">>>>>", res)
            setTweets(res.data)
        })
    }

    useEffect(function() {
        fetchTweets()
    }, [])

    return (
        <div>
            <Tweets tweets={tweets}/>
        </div>
    );
}

export default TweetsContainer;
