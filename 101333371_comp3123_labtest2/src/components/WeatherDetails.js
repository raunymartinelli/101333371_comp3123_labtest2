import React from 'react';
import './WeatherDetails.css'; // Make sure to create and style your WeatherDetails.css accordingly

const WeatherDetails = ({ details }) => {
    // Ensure 'details' has the necessary forecast data structure
    if (!details || !details.main || !details.wind) {
        console.error('The required details are not provided:', details);
        return <p className="weather-details-error">No additional details available</p>;
    }

    // Destructure the max and min temperature from 'details.main'
    const { temp_max, temp_min, humidity, pressure } = details.main;
    const { speed: windSpeed } = details.wind;
    // Replace 'visibility' and 'predictability' with actual properties from your data
    const visibility = details.visibility;
    const predictability = details.predictability; // This property name is assumed, replace with your actual data

    // Convert visibility to kilometers if it's provided in meters
    const visibilityInKilometers = visibility ? (visibility / 1000).toFixed(1) : undefined;

    return (
        <div className="weather-details">
            <div className="weather-detail-item">
                <p className="weather-detail-title">Max Temperature</p>
                <p className="weather-detail-value">{temp_max.toFixed(1)}°C</p>
            </div>
            <div className="weather-detail-item">
                <p className="weather-detail-title">Min Temperature</p>
                <p className="weather-detail-value">{temp_min.toFixed(1)}°C</p>
            </div>
            <div className="weather-detail-item">
                <p className="weather-detail-title">Humidity</p>
                <p className="weather-detail-value">{humidity}%</p>
            </div>
            <div className="weather-detail-item">
                <p className="weather-detail-title">Wind</p>
                <p className="weather-detail-value">{windSpeed} km/h</p>
            </div>
            <div className="weather-detail-item">
                <p className="weather-detail-title">Pressure</p>
                <p className="weather-detail-value">{pressure} hPa</p>
            </div>
            {visibilityInKilometers && (
                <div className="weather-detail-item">
                    <p className="weather-detail-title">Visibility</p>
                    <p className="weather-detail-value">{visibilityInKilometers} km</p>
                </div>
            )}
            {predictability && ( // Check if 'predictability' is not undefined and render it
                <div className="weather-detail-item">
                    <p className="weather-detail-title">Predictability</p>
                    <p className="weather-detail-value">{predictability}%</p> {/* Adjust if it's not a percentage */}
                </div>
            )}
        </div>
    );
};

export default WeatherDetails;
