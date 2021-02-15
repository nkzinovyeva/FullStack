import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({parts}) => {
  return (
    <p>
        {parts.name}, {parts.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part parts = {parts[0]}/>
      <Part parts = {parts[1]}/>
      <Part parts = {parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {

  return (
    <div>
      <p>Number of exercises is {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>   
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))