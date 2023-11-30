import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import './App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (city) => {
        setError('');
        setLoading(true);
        try {
            const apiKey = 'e6ce1ac564866b4a45a31f905facc0a2'; // Move this to environment variables for production
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

            const weatherResponse = await axios.get(weatherUrl);
            const forecastResponse = await axios.get(forecastUrl);

            setWeatherData(weatherResponse.data);
            setForecastData(forecastResponse.data);
        } catch (error) {
            console.error('API call failed:', error);
            setError('An error occurred. Please try again later.');
            if (error.response) {
                // Handle specific status codes if needed
                setError(`Error: ${error.response.status} ${error.response.statusText}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />

            {/* Loading and error states handling */}
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}

            {/* Weather container wrapping both the current weather and forecast components */}
            <div className="weather-forecast-wrapper">
                {weatherData && <WeatherCard data={weatherData} />}
                {forecastData && <Forecast data={forecastData.list} />}
            </div>
        </div>
    );
};

export default App;
