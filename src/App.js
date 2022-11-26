import logo from './logo.svg';
import Heading from './Heading'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [advice, setAdvice] = useState('')
  const [chosenAdvice, setChosenAdvice] = useState(1)
  // const [name, setName] = useState('Generate Name')

  const getAdviceNum = () => {
    setChosenAdvice(Math.floor((Math.random() * 200) + 1))
  }

  useEffect(() => {
    const randomNum = Math.floor((Math.random() * 200) + 1)
    console.log(`Connected number is ${randomNum}`)
    axios.get(`https://api.adviceslip.com/advice/${randomNum}`)
        .then(res => {
          setAdvice(res.data.slip.advice)
        })
  }, [])

  const handleClick = (e) => {
    getAdviceNum()
    console.log(`Number updated to ${chosenAdvice}`)
    axios.get(`https://api.adviceslip.com/advice/${chosenAdvice}`)
        .then(res => {
          setAdvice(res.data.slip.advice)
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading msg={advice}/> 
        <button onClick={handleClick}>Gimme Another</button>
      </header>
    </div>
  );
}

export default App;
