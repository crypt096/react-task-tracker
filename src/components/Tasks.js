const Tasks = ({ tasks }) => {

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.text}
        </div>
      ))}
    </>);
}

export default Tasks;