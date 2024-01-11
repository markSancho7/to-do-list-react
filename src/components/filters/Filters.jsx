import {
	StyledContainerButtons,
	StyledAllTasks,
	StyledActiveTasks,
	StyledCompletedTasks,
	StyledClearCompleted
} from './styles';
const Filters = () => {
	return (
		<StyledContainerButtons>
			<StyledAllTasks>All Tasks</StyledAllTasks>
			<StyledActiveTasks>Active Tasks</StyledActiveTasks>
			<StyledCompletedTasks>Completed Tasks</StyledCompletedTasks>
			<StyledClearCompleted>Clear Completed</StyledClearCompleted>
		</StyledContainerButtons>
	);
};
export default Filters;
