

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


 //1.3
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

//1.4
const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

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

//1.5
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
*/
