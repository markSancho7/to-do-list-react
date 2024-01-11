import { styled } from 'styled-components';

const StyledContainerInput = styled.div`
	width: 450px;
	padding: 0px 0px;
	background-color: black;
	text-align: center;
	margin-top: 40px;
	margin-bottom: 40px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	position: relative;
	border-radius: 10px;
`;

const StyledInput = styled.input`
	width: 300px;
	height: 40px;
	border: none;
	background-color: black;
	color: white;
	margin-left: 20px;
	font-size: 20px;
`;

const StyledLabel = styled.label`
	color: white;
	margin-left: 40px;
	&::before {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		border: 1px solid #fff;
		border-radius: 10px;
		transform: translateY(-50%);
		left: 10px;
		top: 50%;
	}
`;

export { StyledInput, StyledContainerInput, StyledLabel };
