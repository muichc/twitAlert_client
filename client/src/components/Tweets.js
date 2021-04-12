import React, {useState} from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import TweetEmbed from 'react-tweet-embed'

const Tweets = (props) => {
    console.log("HELLOOO THESE ARE THE TWEETS", props.tweets)
    const [tweets, setTweets] = useState(props.tweets)
    let tweetsList = ["Loading..."];
    if (tweets) {
        tweetsList = tweets.map( tweet => {
            return (
                <li key={tweet.id}><TweetEmbed id={tweet.id} /></li>
            )
        })
    } 
    return (
        <div>
            {tweetsList}
        </div>
        
    );
}

export default Tweets;
