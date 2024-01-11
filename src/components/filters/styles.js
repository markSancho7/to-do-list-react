import styled from 'styled-components';

const StyledContainerButtons = styled.div`
	display: flex;
	width: 450px;
	height: 25px;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	color: white;
`;

const StyledAllTasks = styled.button`
	border: none;
	background: none;
	color: white;
`;

const StyledActiveTasks = styled.button`
	border: none;
	background: none;
	color: white;
`;

const StyledCompletedTasks = styled.button`
	border: none;
	background: none;
	color: white;
`;

const StyledClearCompleted = styled.button`
	border: none;
	background: none;
	color: white;
`;

export {
	StyledContainerButtons,
	StyledAllTasks,
	StyledActiveTasks,
	StyledCompletedTasks,
	StyledClearCompleted
};
