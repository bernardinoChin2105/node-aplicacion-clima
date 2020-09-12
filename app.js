const lugar = require('./lugar/lugar')
const argv = require('yargs')
.options({
    direccion:{
        alias :'d',
        desc: 'Especifica la descripción del lugar que desea ser consultado',
        demand:true
    }
})
.argv;

// lugar.obtenerLatLng(argv.direccion).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });;

lugar.obtenerInformacion(argv.direccion)
    .then(result => console.log(result))
    .catch(error => console.log(error));

