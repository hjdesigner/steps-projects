import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 1.5em;
`;
const H2 = styled.h2`
	font-size: 1.3em;
`;
const H3 = styled.h3`
	font-size: 1.1em;
`;
const H4 = styled.h4`
	font-size: 1em;
`;

export const TitleH1 = ({ children, className }) => (
	<H1 className={`${className}`}>{children}</H1>
);
export const TitleH2 = ({ children, className }) => (
	<H2 className={`${className}`}>{children}</H2>
);
export const TitleH3 = ({ children, className }) => (
	<H3 className={`${className}`}>{children}</H3>
);
export const TitleH4 = ({ children, className }) => (
	<H4 className={`${className}`}>{children}</H4>
);
