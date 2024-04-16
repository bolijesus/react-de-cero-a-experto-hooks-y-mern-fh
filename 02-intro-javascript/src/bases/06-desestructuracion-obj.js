// Desestructuracion
// Asignacion desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man'
}

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const use_context = ({clave, nombre, edad, rango = 'Capitán'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 15254,
            lng: -12.546
        }
    }
} 

const {nombreClave, anios, latlng:{lat, lng}} = use_context(persona)

console.log(nombreClave, anios);

console.log(lat, lng);