import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [count, setCount] = useState(0)

  const threatIncrement = () => setCount(count + 1)
  const threatDecrement = () => setCount(count - 1)

  // ahora he delcarado las funciones que llamare cuando se produzca el onclick
  // procedo a generar lo que me debe retornar es decir lo que vere en pantalla

  return (
    <div className='app-cont'>
      {/* llamo al elemento hijo y le paso el constante conunt con el valor entre llaves */}
      <ShowCount count={count} />
      <div className='buttons-cont'>
        <button className='btn btn-plus' onClick={threatIncrement}>
          Suma
        </button>
        <button className='btn btn-minus' onClick={threatDecrement}>
          Resto
        </button>
      </div>
    </div>
  )
}

export default App
