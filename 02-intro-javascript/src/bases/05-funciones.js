// Funciones en JS
const saludar = function (nombre) {
    return `hola ${nombre}`
}

const saludar2 = (nombre) => {
    return `hola ${nombre}`
}

const saludar3 = (nombre) => `hola ${nombre}`

// Manera implicita de hacer return en una funcion de flecha

const getUser = () =>
(
    {
        uid: 'ABC123',
        userName: 'El_boli123'
    }
)

console.log(saludar('Goku'));
console.log(saludar2('Veguetta'));
console.log(saludar3('Brolly'));
console.log(getUser());

//Tarea

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC123',
        nombre: nombre
    }
)


const usuarioActivo = getUsuarioActivo('jesu')

console.log(usuarioActivo);
