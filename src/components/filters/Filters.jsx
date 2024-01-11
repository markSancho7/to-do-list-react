import {
	StyledContainerButtons,
	StyledAllTasks,
	StyledActiveTasks,
	StyledCompletedTasks,
	StyledClearCompleted
} from './styles';
const Filters = ({ setFilter }) => {
	return (
		<StyledContainerButtons>
			<StyledAllTasks onClick={() => setFilter('all')}>
				All Tasks
			</StyledAllTasks>
			<StyledActiveTasks onClick={() => setFilter('active')}>
				Active Tasks
			</StyledActiveTasks>
			<StyledCompletedTasks onClick={() => setFilter('completed')}>
				Completed Tasks
			</StyledCompletedTasks>
			<StyledClearCompleted>Clear Completed</StyledClearCompleted>
		</StyledContainerButtons>
	);
};
export default Filters;
