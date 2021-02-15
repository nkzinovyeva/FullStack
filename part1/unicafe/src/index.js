import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      <h4>Statistics</h4>
      <Display value={props.good} text="good"/>
      <Display value={props.neutral} text="neutral"/>
      <Display value={props.bad} text="bad"/>
      <Display value={props.all} text="all"/>
      <Display value={(props.good - props.bad)/props.all} text="average"/>
      <Display value={(props.good * 100/props.all) + ' %'} text="positive"/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={() => (
        setGood(good + 1), 
        setAll(all + 1)
        )} text="good" />
      <Button handleClick={() => (
        setNeutral(neutral + 1),
        setAll(all + 1)
        )} text="neutral" />
      <Button handleClick={() => (
        setBad(bad + 1),
        setAll(all + 1)
        )} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))