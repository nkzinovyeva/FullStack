import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.part}, {props.exercise}
    </p>
  )
}

const Content = (props) => {
  let data = props.data
  return (
    <div>
      <Part part = {data.part1} exercise ={data.exercises1}/>
      <Part part = {data.part2} exercise ={data.exercises2}/>
      <Part part = {data.part3} exercise ={data.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises is {props.total} </p>   
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const data = {
    part1:part1, 
    exercises1: exercises1,
    part2:part2, 
    exercises2: exercises2,
    part3:part3,
    exercises3: exercises3,
  }

  return (
    <div>
      <Header course={course} />
      <Content data={data}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


//1.1
/*
const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1}, {props.exercises1}
      </p>
      <p>
        {props.part2}, {props.exercises2}
      </p>
      <p>
        {props.part3}, {props.exercises3}
      </p>
    </div>
  )
}
*/