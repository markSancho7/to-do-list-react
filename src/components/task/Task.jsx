import {
	StyledButton,
	StyledCheckbox,
	StyledContainerTask,
	StyledNameTask
} from './styles';

const Task = ({ nameTask, action, actionRemove }) => {
	return (
		<StyledContainerTask>
			<StyledContainerTask>
				<StyledCheckbox type='checkbox' onChange={action}></StyledCheckbox>
				<StyledNameTask>{nameTask}</StyledNameTask>
			</StyledContainerTask>
			<StyledButton onClick={actionRemove}>X</StyledButton>
		</StyledContainerTask>
	);
};
export default Task;
