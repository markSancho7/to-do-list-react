import { StyledClearCompleted } from './styles';

const ClearCompleted = ({ actionClearCompleted }) => {
	return (
		<StyledClearCompleted onClick={actionClearCompleted}>
			Clear Completed
		</StyledClearCompleted>
	);
};
export default ClearCompleted;
