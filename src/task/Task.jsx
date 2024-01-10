import { StyledTask } from './styles';

const Task = ({ nameTask, action }) => {
	return (
		<StyledTask>
			<input type='checkbox' onChange={action}></input>
			<p>{nameTask}</p>
			<button>X</button>
		</StyledTask>
	);
};
export default Task;
