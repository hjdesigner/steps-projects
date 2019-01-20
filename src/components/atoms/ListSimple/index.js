import React from 'react';
import styled from 'styled-components';

const List = styled.li`
	width: 100%;
	float: left;
	white-space: normal;
`;

const ListSimple = ({ children, className, ...props }) => (
	<List className={`${className}`} {...props}>{children}</List>
);

export default ListSimple;
