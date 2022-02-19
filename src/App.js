import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [show, setShow] = useState(true)

  const [count, setCount] = useState(0)
  const [taps, setTaps] = useState(0)

  function handleIncrement() {
    setCount(prevCount => prevCount + 1)
    setTaps(prevTaps => prevTaps + 1)
  }

  function handleDecrement() {
    setTaps(prevTaps => prevTaps + 1)
    if (count !== 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  function handleReset() {
    setCount(0)
  }

  function handleResetAll() {
    setCount(0)
    setTaps(0)
  }


  return (
    <div className="container pt-5">
      <button className="d-block mx-auto btn btn-outline-dark" onClick={() => setShow(prevShow => !prevShow)} > {show ? "Hide Counter" : "Show Counter"} </button>
      {
        show && (
          <Counter 
            countProp={count} 
            tapsProp={taps} 
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
            onResetAll={handleResetAll}
          />
        )}
    </div>
  )
}

export default App;
