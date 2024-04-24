import {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value)

    const handdleAdd = () => {
        // setCounter(()=>2)
        setCounter(counter+1)
    }
    const handdleSubtraction = () => {
        setCounter(counter-1)
    }
    const handdleReset = () => {
        setCounter(()=>value)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handdleAdd }>+1</button>
            <button onClick={ handdleSubtraction }>-1</button>
            <button onClick={ handdleReset }>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}