import {useEffect, useState} from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import CurrentTempContainer from './components/CurrentTempContainer/CurrentTempContainer';


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {

    const getWeather = async () => {
      setIsLoading(true);
      const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=39&lon=-75&units=imperial&appid={API_KEY}');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log("GOT DATA SUCCESSFULLY");
      console.log(data);

      let today = new Date(data.current.dt * 1000);

      setCurrentWeather({
        current_temp: data.current.temp,
        current_data: today.toLocaleDateString(),
        feels_like: data.current.feels_like,
        high: data.daily[0].temp.max,
        low: data.daily[0].temp.min,
      });


      let loadedWeatherForecast = [];

      for (let i = 1; i < 6; i++) {
        let dt = new Date(data.daily[i].dt * 1000);

        loadedWeatherForecast.push({
          date: dt.toLocaleDateString(),
          average: data.daily[i].temp.day,
          max: data.daily[i].temp.max,
          min: data.daily[i].temp.min,
          weather: data.daily[i].weather[0].main,
        });
      };

      setWeatherForecast(loadedWeatherForecast);

      setIsLoading(false);
    }

    getWeather().catch(error => {
      setIsLoading(false);
      console.log("%%%%%%%%% ERROR %%%%%%%%%%%%");
      console.log(error.message);
    });



  }, []);


  let weather_area = null;

  if (isLoading) {
    weather_area = (<p>Loading...</p>)
  }
  else {
    weather_area = (
      <div>
        <CurrentTempContainer currentWeather={currentWeather} />
        <WeatherContainer weatherForecast={weatherForecast} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Weather Man</h1>
      {weather_area}
    </div>
  );
}

export default App;
