import { getHeroesById } from './bases/08-import-export'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         // resolve();
//         const heroe = getHeroesById(2)
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('no se encontro un heroe')
//     }, 2000);

// });

// promesa.then((heroe)=>{
//     console.log('then de la promesa', heroe);
// }).catch((err)=>{
//     console.log(err);
// })

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroesById(id)
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se ha encontrado un heroe');
            }
        }, 2000);

    });

    return promesa;
}

// getHeroeByIdAsync(4).then((heroe)=>{
//     console.log(heroe);
// }).catch((err)=>{
//     console.log(err);
// }).finally('FIN DE LA PROMESA');

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);
