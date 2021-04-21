import React, {useState, useEffect} from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';
// import TweetEmbed from 'react-tweet-embed';
// import {Tweet} from 'react-twitter-widgets';

// Bootstrap + CSS

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const Tweets = (props) => {
    const [tweets, setTweets] = useState(props.tweets)
    let tweetsList = [];
    if (props.tweets) {
        tweetsList = tweets.map( tweet => {
            return (
                <ListGroupItem key={tweet.id} ><TwitterTweetEmbed tweetId={`${tweet.id}`} /></ListGroupItem>
            )
        })
    } 
    return (
        <ListGroup className="d-flex">
            {tweetsList}
        </ListGroup>

    );
}

export default Tweets;
