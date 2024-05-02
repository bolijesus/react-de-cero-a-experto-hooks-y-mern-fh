import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })
    test('getHeroeById debe retornar undefined si no encuentra un heroe por id', () => {
        const id = -1;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un total con los heroes de DC', () => {

        const owner = 'DC';
        const totalHeroes = getHeroesByOwner(owner);

        expect(totalHeroes.length).toBe(3);
        expect(totalHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const heroesDC = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroesDC).toEqual(heroes)
    })

    test('getHeroesByOwner debe retornar un total con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const totalHeroes = getHeroesByOwner(owner);

        expect(totalHeroes.length).toBe(2)
        expect(totalHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })
})