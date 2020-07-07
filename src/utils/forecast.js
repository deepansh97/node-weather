const request = require('postman-request')

const forecast = (latitude, longitude, callback) =>{

  const url = 'http://api.weatherstack.com/current?access_key=872548f921ff57046ad3c948a4f467ae&query=' +latitude+','+longitude
  request({url , json:true},(error,{body})=>{
    if(error){
    callback('Unable to connect to weather Api',undefined)
    }
    else if ( error) {
      callback('Location is invalid, Kindly try another location',undefined)
    }
    else{
      callback(undefined,'it is currently '+body.current.temperature+' degress and '+body.current.weather_descriptions[0]+' out')
    }

  })
}
module.exports = forecast
