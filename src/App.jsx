import './App.css';

const App = () => {
  const courses = [
    { module: 'Math', completed: true },
    { module: 'Biology', completed: false },
    { module: 'Computer Science', completed: true },
  ];

  return (
    <>
      <h1>Course Progress Tracking</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className={course.completed ? 'completed' : 'not-completed'}>
            {course.module}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;