const weatherIcon = require('../assets/weather.svg');

function NavBar() {
    return (
        <div className='nav-div'>
            <button id='first'><img alt='weather-icon' src={weatherIcon} /></button>
            <button id='first'>2</button>
            <button id='first'>3</button>
        </div>
    );
}

export default NavBar;