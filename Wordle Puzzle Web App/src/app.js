import { useState, useEffect } from 'react'
import Game from './components/game'
import { solutions } from './data/db'

function App() {
  const [term, setTerm] = useState(null)

  useEffect(() => { 
    const index = Math.floor(Math.random() * solutions.length)
    setTerm(solutions[index].word)
  }, [])

  return (
    <>
      <h1>Wordle</h1>
      { term && <Game solution = { term } /> }
    </>
  );
}

export default App