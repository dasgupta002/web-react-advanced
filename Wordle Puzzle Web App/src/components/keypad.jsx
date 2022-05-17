import { letters } from '../data/config'

export default function Keypad({ clues }) {
  return (
    <div className = "keypad">
      {
        letters.map((letter, index) => {
          const color = clues[letter.key]             
          return <div key = { index } className = { color }>{ letter.key }</div>
          })
      }
    </div>
  )
}