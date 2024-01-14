import {
	StyledButton,
	StyledCheckbox,
	StyledContainerTask,
	StyledLabel,
	StyledNameTask
} from './styles';

const Task = ({ nameTask, completed, action, actionRemove, sendKey }) => {
	return (
		<StyledContainerTask>
			<StyledContainerTask>
				<StyledCheckbox
					id={sendKey}
					type='checkbox'
					onChange={action}
					checked={completed}
				></StyledCheckbox>
				<StyledLabel htmlFor={sendKey} $checkeado={completed}></StyledLabel>
				<StyledNameTask>{nameTask}</StyledNameTask>
			</StyledContainerTask>
			<StyledButton onClick={actionRemove}>X</StyledButton>
		</StyledContainerTask>
	);
};
export default Task;
