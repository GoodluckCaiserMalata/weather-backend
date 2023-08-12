const axios = require('axios');

module.exports.getLocation = async (city) => {
    try {
        const locationResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city.city}&limit=5&appid=1c551827c295321eb6986510ccc69083`);
        const lat = locationResponse.data[0].lat;
        const lon = locationResponse.data[0].lon;

        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c551827c295321eb6986510ccc69083`);

        return weatherResponse.data;
        
    } catch (error) {
        throw error;
    }
};


module.exports.getLocationAndForecast = async (city) => {
    try {
        const locationResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city.city}&limit=5&appid=1c551827c295321eb6986510ccc69083`);
        
        if (locationResponse.data.length === 0) {
            throw new Error("Location not found");
        }
        
        const lat = locationResponse.data[0].lat;
        const lon = locationResponse.data[0].lon;

        const forecastResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1c551827c295321eb6986510ccc69083`);

        return forecastResponse.data;
        
    } catch (error) {
        throw error;
    }
};


