import { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleSuma = () => {
        // console.log(event);
        setCounter( counter +1 )
    }

    // Forma corta de escribir
    const handleResta = () => setCounter( counter -1 );
     
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <div> { counter } </div>
            <button onClick={ handleResta } >-1</button>
            <button onClick = { handleSuma } >+1</button>
            <button onClick={ handleReset }>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};