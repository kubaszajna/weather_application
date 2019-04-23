import React from 'react';
import './Result.css'

const Result = props => {

    const { error, city, temp, date, sunrise, sunset, pressure, wind } = props.weather;

    let content = null;

    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

        content = (
            <div>
                <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Wschód słońca dzisiaj o {sunriseTime}</h4>
                <h4>Wschód słońca dzisiaj o {sunsetTime}</h4>
                <h4>Aktualna siła wiatru {wind} m/s</h4>
                <h4>Aktualne ciśnienie {pressure} hPa</h4>
            </div>
        )
    }

    return (
        <div className="result">
            {
                error ? `Nie mamy w bazie: ${city}` : content
            }
        </div>

    )
}
export default Result;