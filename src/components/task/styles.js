import styled from 'styled-components';

const StyledContainerTask = styled.div`
	display: flex;
	width: 450px;
	height: 45px;
	background-color: black;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5px;
	border-radius: 10px;
`;
const StyledCheckbox = styled.input`
	margin-left: 10px;
	margin-top: auto;
	margin-bottom: auto;
`;

const StyledNameTask = styled.p`
	color: white;
	margin-left: 35px;
	font-size: 20px;
	margin-top: auto;
	margin-bottom: auto;
`;

const StyledButton = styled.button`
	margin-right: 10px;
	border: none;
	background: none;
	color: white;
`;
export { StyledContainerTask, StyledNameTask, StyledButton, StyledCheckbox };
