import React from 'react';
import './Forecast.css';

const Forecast = ({ data }) => {
    if (!data || data.length === 0) {
        return <p className="forecast-error">No forecast data available.</p>;
    }

    const formatDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    const forecastsByDay = data.reduce((acc, current) => {
        const date = formatDate(current.dt);
        if (!acc[date]) {
            acc[date] = current;
        }
        return acc;
    }, {});

    const dailyForecasts = Object.values(forecastsByDay).slice(0, 5);

    return (
        <div className="forecast-container">
            {dailyForecasts.map(forecast => (
                <div key={forecast.dt} className="forecast-card">
                    <div className="forecast-date">{formatDate(forecast.dt)}</div>
                    <img
                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                        alt={`${forecast.weather[0].description} icon`}
                        className="forecast-icon"
                    />
                    <div className="forecast-temp">
                        <span className="temp-label">Max:</span>
                        <span className="temp-max">{forecast.main.temp_max.toFixed(1)}°C</span>
                    </div>
                    <div className="forecast-temp">
                        <span className="temp-label">Min:</span>
                        <span className="temp-min">{forecast.main.temp_min.toFixed(1)}°C</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Forecast;
