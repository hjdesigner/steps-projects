import React from 'react';
import styled from 'styled-components';
import { HeaderProject } from 'components/organisms';
import { StepsCards } from 'components/molecules';

const Container = styled.div`
	padding: 20px;
`;
const ProjectPhases = styled.main`
	width: 100%;
  height: auto;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
	margin-top: 40px;
	padding-bottom: 20px;
`;

const Projects = () => (
	<Container>
		<HeaderProject />
		<ProjectPhases>
			<StepsCards />
			<StepsCards />			
			<StepsCards />			
		</ProjectPhases>
	</Container>
);

export default Projects;
