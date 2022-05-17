export default function Row({ guess, current }) {    
  if(guess) {
    return (
      <div className = "row">
        {
          guess.map((item, index) => <div key = { index } className = { item.color }>{ item.key }</div>)
        }
      </div>
    )
  }
    
  if(current) {
    let letters = current.split('')
 
    return (
      <div className = "row">
        {
          letters.map((letter, index) => <div key = { index } className = "filled">{ letter }</div>)
        }

        {
          [...Array(5 - letters.length)].map((item, index) => <div key = { index }></div>)
        }
      </div>
    )
  }
    
  return (
    <div className = "row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}