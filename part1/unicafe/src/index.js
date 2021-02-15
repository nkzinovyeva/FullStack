import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h4>Statistics</h4>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h4>Statistics</h4>
      <table>
        <tbody>
          <Statistic value={props.good} text="good"/>
          <Statistic value={props.neutral} text="neutral"/>
          <Statistic value={props.bad} text="bad"/>
          <Statistic value={props.all} text="all"/>
          <Statistic value={(props.good - props.bad)/props.all} text="average"/>
          <Statistic value={(props.good * 100/props.all) + ' %'} text="positive"/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const goodClick = good + 1
    setGood(goodClick);
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    const neutralClick = neutral + 1
    setNeutral(neutralClick)
    setAll(all + 1)
  }
  
  const handleBadClick = () => {
    const badClick = bad + 1
    setBad(badClick)
    setAll(all + 1)
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))