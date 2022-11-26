import { useEffect, useState } from 'react';
import patterndiviermobile from './pattern-divider-desktop.svg'
import axios from 'axios'
import './App.css';

function App() {

  const [advice, setAdvice] = useState('')
  const [chosenAdvice, setChosenAdvice] = useState(Math.floor((Math.random() * 200) + 1))
  // const [name, setName] = useState('Generate Name')

  useEffect(() => {
    const randomNum = Math.floor((Math.random() * 200) + 1)
    axios.get(`https://api.adviceslip.com/advice/${randomNum}`)
        .then(res => {
          setAdvice(res.data.slip)
        })
  }, [])

  const handleClick = () => {
    setChosenAdvice(Math.floor((Math.random() * 200) + 1))
    axios.get(`https://api.adviceslip.com/advice/${chosenAdvice}`)
        .then(res => {
          setAdvice(res.data.slip)
        })
  }

  return (
    <div className="App">
        <p className="number">Advice #{advice.id}</p>
        <p className="advice">"{advice.advice}"</p>
        <img src={patterndiviermobile} className="divider" alt="separate"/>
        <button onClick={handleClick} className="advice-btn" alt="Gimme Another"></button>
    </div>
  );
}

export default App;
