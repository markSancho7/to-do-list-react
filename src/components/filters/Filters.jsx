import {
	StyledContainerButtons,
	StyledAllTasks,
	StyledActiveTasks,
	StyledCompletedTasks
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
		</StyledContainerButtons>
	);
};
export default Filters;
