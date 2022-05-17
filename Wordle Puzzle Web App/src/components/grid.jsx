import Row from './row'

export default function Grid({ turns, current, guesses }) {
  return (
    <>
      {
        guesses.map((guess, index) => turns === index ? <Row key = { index } current = { current } /> : <Row key = { index } guess = { guess } />)
      }
    </>
  )
}