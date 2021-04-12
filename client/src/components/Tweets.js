import React, {useState, useEffect} from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';
// import TweetEmbed from 'react-tweet-embed';
// import {Tweet} from 'react-twitter-widgets';

const Tweets = (props) => {
    console.log("HELLOOO THESE ARE THE TWEETS", props.tweets)
    const [tweets, setTweets] = useState(props.tweets)
    let tweetsList = [];
    if (props.tweets) {
        tweetsList = tweets.map( tweet => {
            return (
                <li key={tweet.id} style={{listStyle: "none"}}><TwitterTweetEmbed tweetId={`${tweet.id}`} /></li>
            )
        })
    } 
    console.log(tweetsList)
    return (
        <ul>
            {tweetsList}
        </ul>
        
    );
}

export default Tweets;
