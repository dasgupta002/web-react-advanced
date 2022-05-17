import { useState, useEffect } from 'react'
import useLogic from '../hooks/logic'
import Grid from './grid'
import Keypad from './keypad'
import Modal from './modal'

export default function Game({ solution }) {
  const { turns, current, attempts, correct, used, keyup } = useLogic(solution)
  
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', keyup)

    if(correct) {
      setTimeout(() => setShow(true), 2000)
      window.removeEventListener('keyup', keyup)
    }
    
    if(turns > 5) {
      setTimeout(() => setShow(true), 2000)
      window.removeEventListener('keyup', keyup)
    }

    return () => window.removeEventListener('keyup', keyup)
  }, [keyup, correct, turns])

  return (
    <>
      <Grid turns = { turns } current = { current } guesses = { attempts } />
      <Keypad clues = { used } />
      { show && <Modal turns = { turns } correct = { correct } answer = { solution } /> }
    </>
  )
}