import React from 'react';
import WeatherDetails from "./WeatherDetails";
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
    if (!data || !data.weather || !data.main || !data.wind) {
        return <p className="weather-error">No weather data available</p>;
    }

    const formatDate = (date) => {
        return new Date(date * 1000).toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    };

    const { temp } = data.main;
    const { description, icon } = data.weather[0];
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className="weather-card">
            <div className="weather-temp-bubble">{`${temp.toFixed(1)}°C`}</div>
            <div className="weather-header">
                <div className="weather-date">{formatDate(data.dt)}</div>
                <div className="weather-location">{data.name}</div>
            </div>
            <div className="weather-body">
                <img src={iconUrl} alt={`${description} icon`} className="weather-icon" />
                <div className="weather-description">{description}</div>
            </div>
            <WeatherDetails details={data} />
        </div>
    );
};

export default WeatherCard;
