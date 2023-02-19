import { getImagen } from "../../base-pruebas/11-async-await"

describe('Prueba en 11-async-await', () => {
    
    test('getImage de retornar un URL de la imagen', async() => {
        
        const url = await getImagen();

        console.log( url );

        expect( url ).toEqual(expect.any( String ))
    })
})