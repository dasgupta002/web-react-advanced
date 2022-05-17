export default function Modal({ turns, correct, answer }) {
  return (
    <div className = "modal">
      { 
        correct && <div>
          <h1>Whoa, you just won the bit!</h1>
          <p>You found the solution in { turns } guesses.</p>
        </div>
      }

      {
        !correct && <div>
          <h1>Ahh, you lost the way in!</h1>
          <p>The solution for the gamble was { answer }.</p>
        </div>
      }
    </div>
  )
}