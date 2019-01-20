import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/atoms';

const Nav = styled.nav`
	width: 4%;
	height: 100%;
	background-color: #44475a;
`;
const Add = styled.div`
	margin-bottom: 20px;
	button {
		height: 40px;
		background-color: #6272a4;
		cursor: pointer;
		svg {
			color: #FFFFFF;
			font-size: 1.5em;
		}
	}
`;
const NavUl = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;
const NavList = styled.li`
	margin-bottom: 10px;
	text-align: center;
	svg {
		color: #FFF;
		font-size: 1.3em;
	}
	a {
		width: 100%;
    display: flex;
    justify-content: center;
	}
`;

const NavBar = () => (
	<Nav>
		<Add>
			<Button>
				<FontAwesomeIcon icon={faPlus} />
			</Button>
		</Add>
		<NavUl>
			<NavList>
				<Link to='/'>
					<FontAwesomeIcon icon={faHome} />
				</Link>
			</NavList>
		</NavUl>
	</Nav>
);

export default NavBar;
