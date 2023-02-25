import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => {

    const title = 'Buen día Sr...';
    const subtitle = '-->Acceso concedido<--';
    const name = ' Lucas Fiorentino';

    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render(<FirstApp title={ title } />)
        expect( container ).toMatchSnapshot();

    });

    test('Debe mostrar en mensje: "Acceso concedido"', () => {

        render( <FirstApp title={ title } /> )
        expect( screen.getByText( title ) ).toBeTruthy();
        // screen.debug();

    });

    test('Debe mostrar el tiulo en un h1', () => {

        render( <FirstApp title={ title } /> )
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

    });
    
    test('Debe mostrar el subtitulo enviado por props', () => {

        render( 
            <FirstApp 
                title = { title } 
                subtitle = { subtitle }
            /> 
        )

        expect( screen.getAllByText(subtitle).length ).toBe(2)

    })

});