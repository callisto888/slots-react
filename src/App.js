import { useState } from 'react'
import './App.css'
import SlotMachine from './SlotMachine.js'
import SlotMachineUi from './SlotMachineUi.js'

function App() {
  const [balance, setBalance] = useState(1000)

  return (
    <div className="App">
      <div>
        <SlotMachineUi
          setBalance={setBalance}
          balance={balance}
        ></SlotMachineUi>

        <SlotMachine setBalance={setBalance} balance={balance}></SlotMachine>
      </div>
    </div>
  )
}

export default App
