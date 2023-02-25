import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => {


    // test('Debe hacer match con el snapshot', () => {
    //     const title = "Buenos dias--"
    //     const {container} = render( <FirstApp title={ title } /> );
    //     expect( container ).toMatchSnapshot();
    // });

    test('Debe mostrar el titulo en un h1', () => {
        
        const title = "Buenos dias--"
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

        expect( getByText(title) ).toBeTruthy;

        // const h1 = container.querySelector('h1');
        // // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });

    test('Debe mostrar el subtitulo enviado por props', () => {

        const title = "Buenos dias--";
        const subtitle ="Acceso concedido...";
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subtitle={ subtitle } 
            /> 
        );

        expect( getAllByText(subtitle).length ).toBe(2);

     })

});