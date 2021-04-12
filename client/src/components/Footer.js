import React from 'react';

const Footer = () => {
    return (
        <footer className="d-flex justify-content-between">
            <div style={{paddingLeft: '10px'}}>Powered by <a href="https://developer.twitter.com/en/docs/twitter-api" style={{color:'#212529', textDecoration:'none'}}> Twitter API </a> &nbsp; | &nbsp;<a href="https://zipapi.us/" style={{color:'#212529', textDecoration:'none'}}>  Zip API </a> &nbsp; | &nbsp; <a href="https://www.iqair.com/us/air-pollution-data-api" style={{color:'#212529', textDecoration:'none'}}> AQI API </a>&nbsp;</div>
            <div>&nbsp;All Rights Reserved, &copy; 2021 TwitAlert &nbsp;</div>
        </footer>
    );
}

export default Footer;
