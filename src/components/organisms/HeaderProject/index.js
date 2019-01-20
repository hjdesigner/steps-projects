import React from 'react';
import styled from 'styled-components';
import * as variables from 'utils/variable-style';
import {
	TitleH1,
	UserPicture
} from 'components/atoms';

const ProjectHeader = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const Title = styled(TitleH1)`
	color: ${variables.$white};
`;
const Users = styled.div`
	svg {
		color: ${variables.$white};
	}
`;

const HeaderProject = () => (
	<ProjectHeader>
		<Title>
			Sprint Han Solo
		</Title>
		<Users>
			<UserPicture />
		</Users>
	</ProjectHeader>
);

export default HeaderProject;
