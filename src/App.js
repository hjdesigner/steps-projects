import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from 'components/molecules';
import { Header } from 'components/organisms';
import { Projects } from 'components/ecosystems';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font-size: 100%;
		font-family: 'Open Sans', sans-serif;
		line-height: 1.15;
		margin: 0;
	}
	body {
		background-color: #282a36;
		font-family: Arial, "Helvetica Neue";
		font-size: 100%;
	}
	body,
	html {
		width: 100%;
		height: 100%;
    display: flex;
    flex-wrap: wrap;
	}
	#root {
		width: 100%;
    display: flex;
    justify-content: space-between;
	}
`;
const Content = styled.div`
	width: calc(100% - 4%);
`;

class App extends Component {
  render() {
		return (
			<Router>
				<React.Fragment>
					<NavBar />
					<Content>
						<Header />
						<Route path="/project" component={Projects} />
					</Content>
					<GlobalStyle />
				</React.Fragment>
			</Router>
    );
  }
}

export default App;
