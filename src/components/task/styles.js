import styled from 'styled-components';

const StyledContainerTask = styled.div`
	display: flex;
	position: relative;
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
	display: none;
`;
const StyledLabel = styled.label`
	color: white;
	margin-left: 40px;
	&::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		border: 1px solid #fff;
		border-radius: 100%;
		transform: translateY(-50%);
		left: 10px;
		background-image: url('../public/images 3/icon-check.svg');
		background-size: cover;
		background: ${({ $checkeado }) => ($checkeado ? '' : 'black')};
		top: 50%;
	}
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
export {
	StyledContainerTask,
	StyledNameTask,
	StyledButton,
	StyledCheckbox,
	StyledLabel
};
