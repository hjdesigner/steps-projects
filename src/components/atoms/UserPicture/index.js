import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

const Figure = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
	border-radius: 50%;
	background-color: #bd93f9;
`;

const UserPicture = () => (
	<Figure>
		<FontAwesomeIcon icon={faUserNinja} />
	</Figure>
);

export default UserPicture;
