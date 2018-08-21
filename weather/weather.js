const axios = require('axios');

const getWeather = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3231b6b99c0f542e2ffb06b087cc468b`);

    return resp.data.main.temp;
}


module.exports = {
    getWeather
}