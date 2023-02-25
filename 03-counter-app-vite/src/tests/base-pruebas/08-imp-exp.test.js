import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById de retornar un Héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        // console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroesById de retornar undefined si no existe el id', () => {
        
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();

    })
    
    test('getHeroesByOwner de retornar los Heroes de DC', () => {
        
        const owner = "DC";
        const listaDC = getHeroesByOwner(owner);

        // console.log(listaDC);

        expect(listaDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
        expect(listaDC.length).toBe(3);
        expect(listaDC).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
    })
    
    test('getHeroesByOwner de retornar los Heroes de Marvel', () => {
        
        const owner = "Marvel";
        const listaDC = getHeroesByOwner(owner);

        // console.log(listaDC);

        expect(listaDC.length).toBe(2);
        expect(listaDC).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
    })
    
})