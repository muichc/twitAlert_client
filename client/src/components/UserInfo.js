import React, {useState, useEffect} from 'react';
import {userState} from '../recoil/atoms';
import {useRecoilValue} from 'recoil';

const apiKey = process.env.REACT_APP_IQAIR_API


const UserInfo = () => {
    const [temperature, setTemperature] = useState(0)
    const [airQualityIndex, setAirQualityIndex] = useState(0)
    const [airQuality, setAirQuality] = useState("")
    const user =useRecoilValue(userState)
    const city = user.locationName
    const url = `http://api.airvisual.com/v2/city?city=${city}&state=California&country=USA&key=${apiKey}`
    const getAirQuality = () => {
        return fetch(`${url}`).then(res => res.json()).then(res_json => {
            setTemperature(res_json.data.current.weather.tp)
            setAirQualityIndex(res_json.data.current.pollution.aqius)
            if (airQualityIndex < 50) {
                setAirQuality("Good")
            } else if (50 < airQualityIndex < 101) {
                setAirQuality("Moderate")
            } else if (101 < airQualityIndex < 151) {
                setAirQuality("Unhealthy for Sensitive Groups")
            } else if (151 < airQualityIndex < 201) {
                setAirQuality("Unhealthy")
            }else if (201 < airQualityIndex < 300) {
                setAirQuality("Very Unhealthy")
            } else {
                setAirQuality("Hazardous")
            }
        })
    }

    useEffect(function() {
        getAirQuality();
    })
    
    return (
        <div className="user-info">
            {airQualityIndex > 101 && (
                <p>The air quality is bad today! Remember to turn on your air purifiers! :(</p>
            )}
            <p>Location: {city} </p>
            <p>Temperature: {temperature}&#8451;</p>
            <p>Air Quality: {airQualityIndex}, {airQuality}</p>
            <button className="btn btn-outline-warning "><a className="profile" href="/user/profile">View Profile</a></button>
        </div>
    );
}

export default UserInfo;


