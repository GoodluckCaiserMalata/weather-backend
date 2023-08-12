const weatherService = require('./weatherDataService');

module.exports.location = async (req, res)=> {
    try {
        const city = req.query
        console.log(city);
        const response = await weatherService.getLocation(city);
        return res.status(200).json(response)
    } catch (error) {
       console.error('Couldnot fetch location', error) 
    }
   
}
module.exports.getLocationAndForecast = async (req, res)=> {
    try {
        console.log('------------------------------------');
        const city = req.query
        console.log({city});
        const response = await weatherService.getLocationAndForecast(city);
        return res.status(200).json(response)
    } catch (error) {
       console.error('Couldnot fetch forecast', error) 
    }
   
}