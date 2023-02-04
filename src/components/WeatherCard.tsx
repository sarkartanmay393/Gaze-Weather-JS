import './WeatherCard.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';


const LocationIcon = require('../assets/location.svg');
const SunGif = require('../assets/sun.gif');
const Sunny = require('../assets/sunny-bg.svg');

let header = false ? {} : {
    // "Sec-Fetch-Site": "cross-site",
    // "Sec-Fetch-Mode": "cors",
    // "Access-Control-Allow-Origin": '*',
};

function WeatherCard() {
    const [openSearchBox, setOpenSearchBox] = useState(true);
    const [textValue, setTextValue] = useState('');
    const [pageInfo, setPageInfo] = useState({
        "Key": "191607",
        "Name": "Dhupguri",
        "WeatherText": "Sunny",
        "Humidity": 29,
        "Time": "2023-01-30T16:18:00+05:30",
        "Temparature": 32.9,
        "WindSpeed": 11.5,
        "Visibility": 9.7,
        "Precipitation": 0,
        "Sun": {
            "Rise": "06:20",
            "Set": "05:15"
        },
        "Day1": {},
        "Day2": {},
        "Day3": {},
        "Day4": {}
    });
    const [datetime, setDatetime] = useState({
        DATE: "23-12-2022",
        TIME: "01:12"
    });



    window.onload = () => {
        // setTextValue('Goa');
        // searchButton();
    };


    const changeLocationButton = () => setOpenSearchBox(true);
    const searchButton = async () => {
        let locationRes = await axios.get('http://dataservice.accuweather.com/locations/v1/search', {
            params: {
                apikey: "kUgGVIDkvSGQumIzwhl3X4WNx1Gq5pGX",
                q: textValue,
                language: "en-us",
                details: true,
                offset: "",
                alias: ""
            },
            headers: header
        });
        let locationBody = locationRes.data ? locationRes.data[0] : {};
        if (!locationBody) {
            // text-area styling on error
            document.getElementById('text-area').className += "error";

            // more additions
            setTextValue('');
            document.getElementById('text-area').placeholder = "Location not found!";

            window.setTimeout(() => {
                document.getElementById('text-area').placeholder = "Type another location..."
                document.getElementById('text-area').className = "";
            }, 2000);

            return;
        }

        let conditionRes = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationBody.Key, {
            params: {
                apikey: "kUgGVIDkvSGQumIzwhl3X4WNx1Gq5pGX",
                language: "en-us",
                details: true,
            },
            headers: header
        });
        let forecast = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationBody.Key, {
            params: {
                apikey: "kUgGVIDkvSGQumIzwhl3X4WNx1Gq5pGX",
                language: "en-us",
                details: true,
                metric: true,
            },
            headers: header
        });
        let dailyForecasts = forecast.data['DailyForecasts'];

        // Minify sun timing
        dailyForecasts[0]['Sun']['Rise'] = `${dailyForecasts[0]['Sun']['Rise'].slice(11, 13)}:${dailyForecasts[0]['Sun']['Rise'].slice(14, 16)}`;
        dailyForecasts[0]['Sun']['Set'] = `${"0" + (+dailyForecasts[0]['Sun']['Set'].slice(11, 13) - 12 + "")}:${dailyForecasts[0]['Sun']['Set'].slice(14, 16)}`;

        setPageInfo({
            Key: locationBody.Key,
            Name: locationBody.LocalizedName,
            WeatherText: conditionRes.data[0]['WeatherText'],
            Humidity: conditionRes.data[0]['RelativeHumidity'],
            Time: conditionRes.data[0]['LocalObservationDateTime'],
            Temparature: conditionRes.data[0]['Temperature']['Metric']['Value'],
            WindSpeed: conditionRes.data[0]['Wind']['Speed']['Metric']['Value'],
            Visibility: conditionRes.data[0]['Visibility']['Metric']['Value'],
            Precipitation: conditionRes.data[0]['PrecipitationSummary']['Precipitation']['Metric']['Value'],
            DayName: sw(new Date().getTime()),
            Sun: {
                Rise: dailyForecasts[0]['Sun']['Rise'],
                Set: dailyForecasts[0]['Sun']['Set'],
            },
            Day1: {},
            Day2: {},
            Day3: {},
            Day4: {},
        });

        alert(pageInfo.Time);

        setOpenSearchBox(false);
        setTextValue('');
    }

    const sw = (DayNum) => {
        switch (DayNum) {
            default:
                return "";
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    }

    useEffect(() => {
        //2023-01-19T13:58:00+05:30
        let timeMeter = +pageInfo['Time'].slice(11, 13) > 12 ? "PM" : "AM";
        setDatetime({
            "DATE": `${pageInfo['Time'].slice(8, 10)}-${pageInfo['Time'].slice(5, 7)}-${pageInfo['Time'].slice(0, 4)}`,
            "TIME": `${timeMeter === "PM" ?
                ((+pageInfo['Time'].slice(11, 13) - 12 + "").length === 1 ? "0" + (+pageInfo['Time'].slice(11, 13) - 12 + "") : +pageInfo['Time'].slice(11, 13) - 12)
                : pageInfo['Time'].slice(11, 13)}:${pageInfo['Time'].slice(14, 16)
                } ${timeMeter}`,
        });

    }, [pageInfo]);

    return (
        <>
            <p id='update-time'>{datetime ? `Last Updated: ${datetime.TIME}` : ""}</p>
            <div className='weather'>
                <div className='weather-card'>
                    <div className='weather-bg'>
                    </div>
                    <div className='weather-inside'>
                        <h3>{pageInfo['Name'] ? pageInfo['Name'] : "-"}</h3>
                        <p>{datetime.DATE}</p>
                        <div className='row'>
                            <img src={LocationIcon.default} alt='location-icon' />
                            <p>{pageInfo['Name'] ? pageInfo['Name'] : "-"}</p>
                        </div>
                    </div>

                    <div className='bottom-white-space'>
                        <div className='white-space-inside'>
                            <div className='col'>
                                <img alt='sun-icon' src="https://img.icons8.com/emoji/96/null/sun-emoji.png" />
                                <h3>{pageInfo['WeatherText'] ? pageInfo['WeatherText'] : "-"}</h3>
                            </div>
                            <div className='right'>
                                <h3 id="degree-meter">{pageInfo['Temparature'] ? Math.trunc(pageInfo['Temparature']) : "-"} ℃</h3>
                                <img alt='sunny' src={Sunny.default} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='weather-info'>
                    <div className='row'>
                        <h4>VISIBILITY</h4>
                        <h5>{pageInfo['Visibility'] ? pageInfo['Visibility'] : "0"}km</h5>
                    </div>
                    <div className='row'>
                        <h4>HUMIDITY</h4>
                        <h5>{pageInfo['Humidity'] ? pageInfo['Humidity'] : "0"}%</h5>
                    </div>
                    <div className='row'>
                        <h4>WIND</h4>
                        <h5>{pageInfo['WindSpeed'] ? pageInfo['WindSpeed'] : "0"}km/h</h5>
                    </div>

                    <div className='sun-time-div'>
                        <img src={SunGif} alt='sunrise-to-sunset' />
                        <div className='col'>
                            <h4>Sunrise: {pageInfo['Sun']['Rise']} AM</h4>
                            <h4>Sunset: {pageInfo['Sun']['Set']} PM</h4>
                        </div>
                    </div>

                    <div className='weather-timeline row'>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Sat</p>
                            <p><strong>20 ℃</strong></p>
                        </div>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Sun</p>
                            <p><strong>12 ℃</strong></p>
                        </div>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Mon</p>
                            <p><strong>18 ℃</strong></p>
                        </div>
                        <div className='timeline-card col'>
                            <img src='https://img.icons8.com/doodle/512/apple-weather.png' alt='weather-icon-a' />
                            <p>Tue</p>
                            <p><strong>15 ℃</strong></p>
                        </div>
                    </div>

                    <div className='btn-area'>
                        {openSearchBox ?
                            <div className='row'>
                                <input id='text-area' style={{}} name='search-for' type="text" placeholder='e.g. Delhi' value={textValue} onChange={e => setTextValue(e.target.value)} onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        searchButton();
                                    }
                                }} />
                                <button id='search-btn' onClick={searchButton}><span role='img' aria-label='search-icon'>🔍</span></button>
                            </div> :
                            <button id="location-btn" onClick={changeLocationButton}>Change Location</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );

}



export default WeatherCard;