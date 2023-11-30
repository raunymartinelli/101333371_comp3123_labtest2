import React, { useState } from 'react';
import './SearchBar.css'; // Make sure your CSS file is linked correctly

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim()) { // Ensure that empty strings are not submitted
            onSearch(city.trim());
            setCity(''); // Clear the input field after search
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a city..."
                aria-label="Search for a city" // Accessibility improvements
                className="search-input"
            />
            <button type="submit" className="search-button" aria-label="Search">
                Search
            </button>
        </form>
    );
};

export default SearchBar;


