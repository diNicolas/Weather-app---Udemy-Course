const axios = require('axios');


const getPlace = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No match reust for the city ${direccion}`);
    }

    let location = resp.data.results[0];
    let geom = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lad: geom.lat,
        lng: geom.lng

    }
}

module.exports = {
    getPlace
}