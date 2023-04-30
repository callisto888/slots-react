import { useState } from 'react'
import './App.css'
import SlotMachineUi from './SlotMachineUi.js'

function App() {
  let signs = ['X', 'O', 'U', 'J']

  const [data, setData] = useState([randSign(), randSign(), randSign()])
  const [balance, setBalance] = useState(1000)
  const [showOk, setShowOk] = useState(false)

  function randSign() {
    return signs[Math.floor(Math.random() * signs.length)]
  }

  function handleClick() {
    setShowOk(false)
    setData([randSign(), randSign(), randSign()])
    setBalance(balance - 10)
  }

  if (data[0] === data[1] && data[0] === data[2]) {
    if (!showOk) {
      setShowOk(true)
      setBalance(balance + 100)
    }
  }

  let ok = (
    <div>
      <h1>
        {data[0]} {data[1]} {data[2]}
      </h1>
      <h1>URA BLEAT' :)</h1>
    </div>
  )

  let fail = (
    <div>
      <h1>
        {data[0]} {data[1]} {data[2]}
      </h1>
      <h1>:(</h1>
    </div>
  )

  return (
    <div className="App">
      <div>
        <SlotMachineUi
          setBalance={setBalance}
          balance={balance}
        ></SlotMachineUi>

        <button onClick={handleClick}>GO!</button>

        {showOk ? ok : fail}
      </div>
    </div>
  )
}

export default App
