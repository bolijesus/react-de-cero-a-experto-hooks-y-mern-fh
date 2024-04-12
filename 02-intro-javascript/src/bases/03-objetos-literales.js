// Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 87878787,
        lat: 4877.65464,
        lng: 870.121
    }
}

const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona2);
console.log(persona);
