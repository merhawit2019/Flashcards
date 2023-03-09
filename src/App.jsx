import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2> The Ultimate Plant Parent! </h2>
      <h4>How good of a plant parent are you? Test all of your planty knowledge here! </h4>
      <h5>Number of cards: 10</h5>
    </div>
  )
}

export default App
