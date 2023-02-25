import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";


describe('Pruebas en CounterApp', () => {

    const value = 100;

    test('Debe hcaer match con el snapxhot', () => {

        const { container } = render( <CounterApp value={ value } /> )
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar un valor inicial de 100', () => {
        
        render( <CounterApp value={ value } />);
        expect( screen.getByText(100) ).toBeTruthy();
        
    });

    test('Debe incrementar con el boton +1', () => {

        render( <CounterApp value={ value } />);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByRole( 'heading' , { name: 'counter' }).innerHTML ).toContain("101")
    });

    test('Debe decrementar con el boton -1', () => {

        render( <CounterApp value={ value } />);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByRole( 'heading' , { name: 'counter' }).innerHTML ).toContain("99")

    });
    
    test('Debe funcionar el boton de Reset', () => {

        render( <CounterApp value={ 50 } />);

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        
        fireEvent.click(screen.getByRole( 'button' , { name: 'reset' }));
        
        expect( screen.getByRole( 'heading' , { name: 'counter' }).innerHTML ).toContain("50")

    });

});