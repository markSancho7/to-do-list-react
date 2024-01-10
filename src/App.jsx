import { useState } from 'react';
import Task from './task/Task';
import { v4 } from 'uuid';

const App = () => {
	const [tasks, setTasks] = useState([]);

	return (
		<>
			<form action='' onSubmit={event => createTasks(event, tasks, setTasks)}>
				<input name='task'></input>
			</form>
			{tasks.map(task => {
				return (
					<Task
						key={task.id}
						{...task}
						action={() => completeTask(task.id, tasks, setTasks)}
					></Task>
				);
			})}
		</>
	);
};
const createTasks = (event, tasks, setTasks) => {
	event.preventDefault();

	const newTask = {
		id: v4(),
		nameTask: event.target.task.value,
		completed: false
	};

	setTasks([...tasks, newTask]);
};

const completeTask = (taskId, tasks, setTasks) => {
	console.log(taskId);
	if (tasks.id === taskId) {
		tasks.completed = !completed;
		setTasks(tasks.completed);
		console.log(tasks);
	}
};

export default App;
