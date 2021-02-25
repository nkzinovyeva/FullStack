import React from 'react'

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

const Course = ({ course }) => {

return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}
export default Course; 