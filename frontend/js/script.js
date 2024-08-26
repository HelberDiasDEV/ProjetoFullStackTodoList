const fetchTasks = async () => {
   const res = await fetch('http://localhost:3333/tasks');
   const tasks = await res.json();
  return tasks;
}

