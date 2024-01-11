import { useState } from 'react';
import Task from './components/task/Task';
import { v4 } from 'uuid';
import {
	StyledContainerInput,
	StyledInput,
	StyledLabel,
	SyledContainerFilters
} from './styles';
import Filters from './components/filters/Filters';
import ClearCompleted from './components/clearCompleted/ClearCompleted';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState('all');

	const filteredTasks = filterTasks(filter, tasks);
	return (
		<>
			<img src='./public/images 3/bg-mobile-light.jpg' alt='' />
			<form action='' onSubmit={event => createTasks(event, tasks, setTasks)}>
				<StyledContainerInput>
					<StyledLabel></StyledLabel>
					<StyledInput name='task' placeholder='escribe tu tarea'></StyledInput>
				</StyledContainerInput>
			</form>
			<div>
				{filteredTasks.map(task => {
					return (
						<Task
							key={task.id}
							{...task}
							action={() => completeTask(task.id, tasks, setTasks)}
							actionRemove={() => removeTask(task.id, tasks, setTasks)}
						></Task>
					);
				})}
			</div>
			<SyledContainerFilters>
				<Filters setFilter={setFilter}></Filters>
				<ClearCompleted
					actionClearCompleted={() => clearCompletedTask(tasks, setTasks)}
				></ClearCompleted>
			</SyledContainerFilters>
		</>
	);
};

const filterByCompleted = tasks => {
	const tasksUpdated = tasks.filter(task => task.completed);
	return tasksUpdated;
};

const filterByActive = tasks => {
	const tasksUpdated = tasks.filter(task => !task.completed);
	return tasksUpdated;
};

const filterTasks = (filter, tasks) => {
	if (filter === 'active') {
		return filterByActive(tasks);
	}

	if (filter === 'completed') {
		return filterByCompleted(tasks);
	}

	return [...tasks];
};

const createTasks = (event, tasks, setTasks) => {
	event.preventDefault();

	const newTask = {
		id: v4(),
		nameTask: event.target.task.value,
		completed: false
	};

	setTasks([...tasks, newTask]);
	event.target.reset();
};

const completeTask = (taskId, tasks, setTasks) => {
	const tasksUpdated = tasks.map(task => {
		if (task.id === taskId) {
			task.completed = !task.completed;
		}
		return task;
	});
	setTasks(tasksUpdated);
};
const clearCompletedTask = (tasks, setTasks) => {
	const tasksUpdated = tasks.filter(task => !task.completed);
	return setTasks(tasksUpdated);
};

const removeTask = (taskId, tasks, setTasks) => {
	const tasksUpdated = tasks.filter(task => task.id !== taskId);
	return setTasks(tasksUpdated);
};

export default App;
