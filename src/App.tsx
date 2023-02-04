import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {

  window.onload = () => {
    if (!(window.screen.width >= 600)) {
      alert("For better experience, use Laptop!");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h2>Gaze Weather</h2>
      </header>
      <div className='main-div'>
        <WeatherCard />
      </div>
      <footer>
        <div id="footer" className='footer'>
          <a href='https://github.com/sarkartanmay393'><img src={require('./assets/profile.svg').default} alt="github-link" />
            <p>Github</p>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
