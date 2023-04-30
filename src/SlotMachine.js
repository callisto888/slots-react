import { useState } from 'react'

function SlotMachine(props) {
  let signs = ['X', 'O', 'U', 'J']

  const [data, setData] = useState([randSign(), randSign(), randSign()])
  const [winState, setWinState] = useState(false)

  function randSign() {
    return signs[Math.floor(Math.random() * signs.length)]
  }

  function handleClick() {
    setWinState(false)
    setData([randSign(), randSign(), randSign()])
    props.setBalance(props.balance - 10)
  }

  if (data[0] === data[1] && data[0] === data[2]) {
    if (!winState) {
      setWinState(true)
      props.setBalance(props.balance + 100)
    }
  }

  let winResult = (
    <div>
      <h1>
        {data[0]} {data[1]} {data[2]}
      </h1>
      <h1>URA BLEAT' :)</h1>
    </div>
  )

  let loseResult = (
    <div>
      <h1>
        {data[0]} {data[1]} {data[2]}
      </h1>
      <h1>:(</h1>
    </div>
  )

  return (
    <div>
      <button onClick={handleClick}>GO!</button>
      {winState ? winResult : loseResult}
    </div>
  )
}

export default SlotMachine
