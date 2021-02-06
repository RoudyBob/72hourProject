import logo from './logo.svg';
import './App.css';
import JobsList from './components/JobsList';
import Nasa from './components/Nasa';
import OpenWeather from './components/OpenWeather';
import Zomato from './components/Zomato';

function App() {
  return (
    <div>
      <JobsList />
      <Nasa />
      <OpenWeather />
      <Zomato />
    </div>
  );
}

export default App;
