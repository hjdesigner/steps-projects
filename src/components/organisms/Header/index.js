import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeaderElement = styled.header`
	text-align: center;
	padding: 11px 0;
	background-color: #44475a;
`;
const A = styled(Link)`
	text-decoration: none;
	color: #FFF;
	text-transform: uppercase;
	font-weight: 600;
`;
const Icon = styled(FontAwesomeIcon)`
	margin-right: 10px;
`;

const Header = () => (
	<HeaderElement>
		<A to='/'><Icon icon={faColumns} />Steps Projects</A>
	</HeaderElement>
);

export default Header;
