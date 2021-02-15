import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h4>Statistics</h4>
      <Display value={good} text="good"/>
      <Display value={neutral} text="neutral"/>
      <Display value={bad} text="bad"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))