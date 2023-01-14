import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {

  window.onload = () => {
    if (!(window.screen.width >= 600)) {
      alert("For better experience, use Laptop!");
    }
  };

  const referToGithub = () => {
    window.open("https://github.com/sarkartanmay393");
  }


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
          <img onClick={referToGithub} src={require('./assets/profile.svg').default} alt="github-link" />
          <p onClick={referToGithub}>Github</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
