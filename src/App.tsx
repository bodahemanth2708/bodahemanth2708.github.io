import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hemanth Boda - VLSI Portfolio</h1>
      <p>Welcome to my portfolio site!</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App