const personajes = ['Goku', 'Vegetta', 'Trunks'];


// personajes.forEach((i)=>{
//     console.log(i);
// })

const [, , p3] = personajes;

// console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea

const use_state = (valor) => {

    return [valor, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = use_state('goku');

console.log(nombre);
setNombre();


