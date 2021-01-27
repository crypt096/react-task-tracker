const Tasks = () => {
  const tasks = [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Meeting at Maldives",
      "day": "Feb 16th at 00:00am",
      "reminder": true
    }
  ]
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