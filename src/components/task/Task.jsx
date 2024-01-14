import {
	StyledButton,
	StyledCheckbox,
	StyledContainerTask,
	StyledLabel,
	StyledNameTask
} from './styles';

const Task = ({ nameTask, completed, action, actionRemove }) => {
	return (
		<StyledContainerTask>
			<StyledContainerTask>
				<StyledCheckbox
					id='check'
					type='checkbox'
					onChange={action}
					checked={completed}
				></StyledCheckbox>
				<StyledLabel htmlFor='check' checked={completed}></StyledLabel>
				<StyledNameTask>{nameTask}</StyledNameTask>
			</StyledContainerTask>
			<StyledButton onClick={actionRemove}>X</StyledButton>
		</StyledContainerTask>
	);
};
export default Task;
