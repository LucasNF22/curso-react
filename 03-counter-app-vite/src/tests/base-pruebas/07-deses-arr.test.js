import { string } from "prop-types";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('Debe restornar un string y un numero', () => {
        
        // console.log('-----------------------------');
        
        const [ letters, numbers ] = retornaArreglo();
        
        // Espera un valor exacto
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );
        
        // Espera un tipo de dato
        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        //Otra forma de esperar un tipo de dato
        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );
        
        // console.log('-----------------------------');
 
    });

});