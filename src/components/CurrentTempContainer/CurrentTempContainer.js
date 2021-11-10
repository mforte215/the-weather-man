import classes from './CurrentTempContainer.module.css';

const CurrentTempContainer = (props) => {
    console.log("Logging current weather in container");
    console.log(props.currentWeather);
    let current_weather = {...props.currentWeather};
    return (
        <div>
            <h1>Current Location: Philadelphia</h1>
            <h2>Current Date: {current_weather.current_data}</h2>
            <h2>Current Tempature: {current_weather.current_temp}</h2>
            <h2>Feels Like: {current_weather.feels_like}</h2>
            <h2>Today's High: {current_weather.high}</h2>
            <h2>Today's Low: {current_weather.low}</h2>

        </div>
    )

}

export default CurrentTempContainer;