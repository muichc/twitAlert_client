import React, { useState, useEffect } from 'react';
import Tweets from '../components/Tweets';
import TweetModel from '../models/tweet';


const TweetsContainer = () => {
    const [tweets, setTweets] = useState([]);

    const fetchTweets= () => {
        TweetModel.all().then(res => {
            console.log(">>>>>", res.data)
            setTweets(res.data)
        })
    }

    // useEffect(function() {
    //     fetchTweets()
    // }, [])


    const sampleTweetData = [
        {id:"1381359692929175558", text:"WARNING: 6.0+ earthquake is likely in California during the next 10 hours (most likely in Central California to Southern California on the Garlock Fault) - https://t.co/Jy5p5TwCyn https://t.co/c4Ggk0nes1"},
        {id: "1381329940621090816", text:"@annadrezen Some more suggestions:Mt. Vesuvius O'Leary's cow from the Chicago fire San Andreas Fault (San Francisco 1906 Earthquake) Irish Potato (because: not the reason for the famine)"},
        {id: "1381295412003414018", text:"@SFAgraduate So many, Tienanmen Square  Soviets finally left Afghanistan Berlin Wall Fell First free elections in Soviet Union history Exxon Valdez Oil Tanker Spill in Alaska 6.9 San Francisco Earthquake that killed 57 people"}
    ];

    // useEffect(function() {
    //     setTweets(sampleTweetData)
    // }, [])

    

    return (
        <div>
            <Tweets tweets={sampleTweetData}/>
            {/* <Tweets tweets={tweets}/> */}
        </div>
    );
}

export default TweetsContainer;
