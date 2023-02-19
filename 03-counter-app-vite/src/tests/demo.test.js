
describe('Prueba en <DemoComponent/>', () => { 
    
    test('esta prueba no debe fallar', ()=> {
    
        // 1. Inicializacion
        const message1 = "Hola Mundo"
    
        // 2. Estímulo
        const messaje2 = message1.trim();
    
        // 3. Observar el comportamiento... eperando
        expect( message1 ).toBe( messaje2 );
    
    
    });
    
 })
