import React from 'react';
import styled from 'styled-components';

const ButtonField = styled.button`
	width: 100%;
	border: 0;
`;

const Button = ({ children, ...props }) => (
	<ButtonField {...props}>
		{children}
	</ButtonField>
);

export default Button;
