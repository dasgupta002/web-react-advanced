import { useState } from 'react'

const useLogic = (phrase) => {
    const [turns, setTurns] = useState(0)
    const [current, setCurrent] = useState('')
    const [attempts, setAttempts] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [correct, setCorrect] = useState(false)
    const [used, setUsed] = useState({})

    const format = () => {
        let solution = [...phrase]
        let guess = [...current].map((letter) => {
            return { key: letter, color: 'grey' }
        })

        guess.forEach((object, index) => {
            if(object.key === solution[index]) {
                object.color = 'green'
                solution[index] = null
            }
        })
        
        guess.forEach((object, index) => {
            if(solution.includes(object.key) && object.color !== 'green') {
                object.color = 'yellow'
                solution[solution.indexOf(object.key)] = null 
            }
        })

        return guess
    }

    const add = (hits) => {
        if(hits === phrase) {
            setCorrect(true)
        }

        setAttempts((value) => {
            let data = [...value]
            data[turns] = hits
            return data
        })

        setHistory((value) => [...value, current])
        setTurns((value) => value + 1)

        setUsed((value) => {
            let keys = { ...value }
            
            hits.forEach((letter) => {
                const color = keys[letter.key]

                if(letter.color === 'green') {
                    keys[letter.key] = 'green'
                    return
                } 

                if(letter.color === 'yellow' && color !== 'green') {
                    keys[letter.key] = 'yellow'
                    return
                }
                
                if(letter.color === 'grey' && color !== 'green' && color !== 'yellow') {
                    keys[letter.key] = 'grey'
                    return
                }
            })

            return keys
        })

        setCurrent('')
    }

    const keyup = ({ key }) => {
        if(key === 'Enter') {
            if(turns > 5) {
                return
            }

            if(history.includes(current)) {
                return
            }

            if(current .length !== 5) {
                return
            }

            const guess = format()
            add(guess)
        }
        
        if(key === 'Backspace') {
            setCurrent((value) => value.slice(0, -1))
            return
        }
        
        if(/^[A-Za-z]$/.test(key)) {
            if(current.length < 5) {
                setCurrent((value) => value + key)
            }
        } 
    }

    return { turns, current, attempts, correct, used, keyup }
}

export default useLogic