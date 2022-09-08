import { useState, useEffect } from 'react';


const WeatherData = (props) => {
    const [weather, setWeather] = useState([]);

    const loadData = () => {
        fetch('http://localhost:8888/api/weather')
        .then((response) => response.json())
        .then((data) => {
            setWeather(data)
        })
    };

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            {weather.map((weather, index) => {
                return (
                    <p key={index}>
                        {weather.lat} {weather.lon}
                    </p>
                );
            })}
            <p>This is a placeholder for longitude</p>
            <p>This is a placeholder for latitude</p>
        </div>
    )
}

export default WeatherData;