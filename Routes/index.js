// require express router and return Routes
const Router = require('express').Router();
const weatherRoutes = require('./weatherDataRoutes/weatherDataIndex')


module.exports = () =>{
    Router.use('/weather', weatherRoutes())
    return Router
}