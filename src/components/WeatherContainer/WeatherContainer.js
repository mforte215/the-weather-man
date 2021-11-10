import WeatherTile from '../WeatherTile/WeatherTile';
import classes from './WeatherContainer.module.css';
const WeatherContainer = (props) => {

    console.log("Logging Weather Forecast");
    console.log(props.weatherForecast);
    let weather_tiles = null;
    if (props.weatherForecast) {
        weather_tiles = props.weatherForecast.map(forecast => {
            return (
                <WeatherTile key={forecast.date} date={forecast.date} weather={forecast.weather} average={forecast.average} min={forecast.min} max={forecast.max} />
            )
        })
    }

    return (
        <div className={classes['weather-container']}>
            {weather_tiles}
        </div >
    )

}

export default WeatherContainer;