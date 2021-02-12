import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  let data = props.data
  return (
    <p>
        {data.name}, {data.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part data = {props.part1}/>
      <Part data = {props.part2}/>
      <Part data = {props.part3}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
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

//1.2
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
*/