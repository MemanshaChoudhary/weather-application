
import './App.css';
import { Search, MapPin, Wind } from 'react-feather';
import getWeather from './api/api';
import { useState } from 'react';
import dateFormat from 'dateformat';


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  }
  const renderDate  = () =>{
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  }
  return (
    <div className="main-block">
      <h1> Weather App</h1>
      <div className="input-block">
        <input type='text' value={city} onChange={(event) => setCity(event.target.value)} placeholder='search places' />
        <button onClick={() => getWeatherbyCity()}><Search></Search></button>
      </div>
      {weather && weather.weather && < div className="content">
      <div className="location">
        <MapPin></MapPin>
        <h2>{weather.name}</h2>
      </div>
      <p className="datetext">
       {renderDate()}
      </p>
      <div className="weatherdesc">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt = ""/>
        <h3>{weather.weather[0].description}</h3>
      </div>
      <div className="temp" >
        <h1>{weather.main.temp}<span>&deg;C</span></h1>
        <h3> Feels like {weather.main.feels_like} <span>&deg;C</span></h3>
      </div>
      <div className="wind">
        <Wind></Wind>
        <h3>Wind is {weather.wind.speed} knots in {weather.wind.deg} &deg;c</h3>
      </div>
    </div>
          }
{!weather.weather && <div className="content">
    <h3> No Data Found!</h3>
   </div>
}
{/* <p>{JSON.stringify(weather)}</p> */}
</div>
 );
}

export default App;
