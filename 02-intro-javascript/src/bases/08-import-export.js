// import {heroes} from './data/heroes';
import heroes, {owners} from "../data/heroes"; 

// console.log(owners);


export const getHeroesById = (id) => {
    return heroes.find( (heroe) => heroe.id === id)
}

// console.log(getHeroesById(3));

const getHeroesByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner);
}

// console.log(getHeroesByOwner('DC'));