import {
	StyledButton,
	StyledCheckbox,
	StyledContainerTask,
	StyledLabel,
	StyledNameTask
} from './styles';

const Task = ({
	nameTask,
	completed,
	action,
	actionRemove,
	actionClearCompleted
}) => {
	return (
		<StyledContainerTask>
			<StyledContainerTask>
				<StyledCheckbox
					id='check'
					type='checkbox'
					onChange={action}
					checked={completed}
				></StyledCheckbox>
				<StyledLabel htmlFor='check'></StyledLabel>
				<StyledNameTask>{nameTask}</StyledNameTask>
			</StyledContainerTask>
			<StyledButton onClick={actionRemove}>X</StyledButton>
		</StyledContainerTask>
	);
};
export default Task;
