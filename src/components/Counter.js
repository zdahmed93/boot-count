import React from 'react'

export default function Counter(props) {
    const decrementCount = () => {
        props.onDecrement()
    }
    return (
        <div className="alert alert-info mt-3  d-flex flex-column align-items-center w-50 mx-auto p-4 border border-info border-4 rounded">
            <h1>Counter</h1>
            <h2 className="display-1">{props.countProp}</h2>
            <h4>Total taps: {props.tapsProp}</h4>
            <div className="d-flex flex-wrap justify-content-center">
                <button className="btn btn-info btn-lg m-2" onClick={decrementCount}>Decrement -</button>
                <button className="btn btn-info btn-lg m-2" onClick={props.onIncrement}>Increment +</button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <button className="btn btn-outline-danger m-2 px-3" onClick={props.onReset}>Reset Count</button>
                <button className="btn btn-outline-danger m-2 px-4" onClick={props.onResetAll}>Reset All</button>
            </div>
        </div>
    )
}


