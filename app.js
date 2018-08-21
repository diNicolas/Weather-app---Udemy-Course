const places = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion of the city to obtain the weather',
    }
}).argv;



let getInfo = async(direccion) => {


    try {
        let coord = await places.getPlace(direccion);
        let temp = await weather.getWeather(coord.lad, coord.lng);
        return `The weather en ${coord.direccion} es de ${temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(message => console.log(message))
    .catch(e => console.log(e));