const weatherRoutes = require('express').Router()

const weatherControlla = require('./weatherDataControlla');

module.exports = () =>{
    weatherRoutes.get('/location',weatherControlla.location)
    weatherRoutes.get('/forecast',weatherControlla.getLocationAndForecast)

    return weatherRoutes
}