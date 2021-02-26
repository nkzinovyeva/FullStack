import React from 'react'

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}

const Part = ({part}) => {
  return (
    <p>
        {part.name}, {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
        {parts.map((part) => <Part key = {part.id} part = {part}/>)}
    </div>
  )
}

const Total = ({parts}) => {

    var total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
      <div>
          <p>total of {total} exercises</p>
      </div>
    )
  }

const Course = ({ courses }) => {
    return (
        <div>{courses.map((course) => 
                <div key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>   
                )}
        </div>
    )
}

export default Course; 