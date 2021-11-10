import classes from './WeatherTile.module.css';

const WeatherTile = (props) => {
    return (
        <div className={classes['weather-tile']}>
            <h3>{props.date}</h3>
            <p>{props.weather}</p>
            <p>{props.average}</p>
            <p>High: {props.max}</p>
            <p>Low: {props.min}</p>
        </div>
    )
}

export default WeatherTile;