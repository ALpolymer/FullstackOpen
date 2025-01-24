const Course = ({ courses }) => {
  return courses.map((course) => {
    return (
      <div key={course.id}>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  })
}

const Header = ({ title }) => {
  return <h3>{title}</h3>
}

const Content = ({ parts }) => {
  return parts.map((part) => <Part part={part} key={part.id} />)
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, curr) => acc + curr.exercises, 0)

  return <b>Total of {sum} exercises</b>
}

export default Course
