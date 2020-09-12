const axios= require('axios');

const obtenerLatLng = async (dir) => {
    
    encodedUrl = encodeURI(dir);

    //let result = await axios.get('');
    //Este reemplaza la petición vía axios que se realiza hacia la API de geo-location.
    let result = {
        lat: 20.9627831,
        lng: -89.3525020
    };

    return {
        direccion: dir,
        lat: result.lat,
        lng: result.lng
    };

};


const obtenerTemperatura = async (lat, lng)=>{

    let temp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=13f0f2915881c504b01443a45c0d9f49&units=metric`);    
    minTemp=temp.data.main.temp_min;
    maxTemp=temp.data.main.temp_max;
    

    return {
        minTemp,
        maxTemp
    };
};


const obtenerInformacion = async dir => {
    let coords = await obtenerLatLng(dir);
    let temp = await obtenerTemperatura(coords.lat, coords.lng);

    return {
        direccion: dir,
        temperatura_minima: temp.minTemp,
        temperatura_maxima: temp.maxTemp
    };
}


module.exports = {
    obtenerLatLng,
    obtenerTemperatura,
    obtenerInformacion
};