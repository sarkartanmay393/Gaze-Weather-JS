import './WeatherCard.css';
import { useState } from 'react';

const LocationIcon = require('../assets/location.svg');
const SunGif = require('../assets/sun.gif');

const Sunrise = '06.22AM';
const Sunset = '05.22PM';


function WeatherCard() {
    const [openSearchBox, setOpenSearchBox] = useState(false);

    const changeLocationButton = () => setOpenSearchBox(true);
    const handleKeyDown = (e) => {
        // e.preventDefault();
        if (e.key === "Enter") {
            setOpenSearchBox(false);
        }
        alert("New Location Configured!");
    }

    return (
        <div className='weather'>
            <div className='weather-card'>
                <div className='weather-bg'>
                </div>
                <div className='weather-inside'>
                    <h3>Friday</h3>
                    <p>13 Jan 2023</p>
                    <div className='row'>
                        <img src={LocationIcon.default} alt='location-icon' />
                        <p>Siliguri, IN</p>
                    </div>
                </div>

                <div className='bottom-white-space'>
                    <div className='white-space-inside'>
                        <div className='col'>
                            <img alt='' src="https://img.icons8.com/emoji/96/null/sun-emoji.png" />
                            <h3>Sunny</h3>
                        </div>
                        <h3 id="degree-meter">20 ℃</h3>
                    </div>
                </div>

            </div>
            <div className='weather-info'>
                <div className='row'>
                    <h4>PRECIPITATION</h4>
                    <h5>12%</h5>
                </div>
                <div className='row'>
                    <h4>HUMIDITY</h4>
                    <h5>34%</h5>
                </div>
                <div className='row'>
                    <h4>WIND</h4>
                    <h5>3km/h</h5>
                </div>

                <div className='sun-time-div'>
                    <img src={SunGif} alt='sunrise-to-sunset' />
                    <div className='col'>
                        <h4>Sunrise: {Sunrise}</h4>
                        <h4>Sunset: {Sunset}</h4>
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
                        <input id="text-area" name='search-for' type="text" placeholder='e.g. Delhi' onKeyDown={handleKeyDown} /> :
                        <button id="location-btn" onClick={changeLocationButton}>Change Location</button>
                    }
                </div>


            </div>
        </div>

    );
}



export default WeatherCard;