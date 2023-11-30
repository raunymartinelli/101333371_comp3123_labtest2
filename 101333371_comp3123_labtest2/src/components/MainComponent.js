import React from 'react';
import WeatherCard from './WeatherCard'; // This is the current day weather card you've shown above
import Forecast from './Forecast'; // This is your forecast component
import './MainComponent.css'; // This is the CSS for your main component

const MainComponent = ({ currentWeather, fiveDayForecast }) => {
    return (
        <div className="main-component">
            {/* Your search bar and other components might go here */}

            {/* Here is the wrapper that contains both the current weather and the forecast */}
            <div className="weather-forecast-wrapper">
                <WeatherCard data={currentWeather} />
                <Forecast data={fiveDayForecast} />
            </div>

            {/* You might have other components or content here */}
        </div>
    );
};

export default MainComponent;
