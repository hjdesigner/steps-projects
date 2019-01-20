import React, { Component } from 'react';
import styled from 'styled-components';
import * as variables from 'utils/variable-style';
import {
	TitleH2,
	TitleH3,
	TitleH4,
	ListSimple
} from 'components/atoms';

const ListCard = styled.section`
	width: 300px;
	display: inline-block;
	margin-right: 10px;
	background-color: ${variables.$ivory};
	padding: 10px;
`;
const TitleListCard = styled(TitleH2)`
	width: 100%;
	color: #44475a;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;
const UlCards = styled.ul`
	width: 100%;
	height: auto;
	display: inline-block;
	&:after {
		content: "";
		clear: both;
		display: inline-block;
	}
`;
const ListCardItem = styled(ListSimple)`
	margin-bottom: 10px;
	padding: 10px;
  white-space: normal;
	background-color: ${variables.$chetwodeBlue};
`;
const Number = styled.span``;
const TitleList = styled(TitleH3)`
	font-weight: 600;
	color: ${variables.$white};
	display: flex;
	justify-content: space-between;
`;
const TitleSubList = styled(TitleH4)`
	width: 100%;
	font-weight: 400;
	color: ${variables.$white};
	display: flex;
	justify-content: space-between;
`;
const SubCard = styled.ul`
	width: 100%;
`;
const ListCardSubItem = styled(ListSimple)`
	margin-top: 5px;
	padding: 8px;
  white-space: normal;
	background-color: ${variables.$BlueZodiac};
	color: ${variables.$white};
	font-size: .8em
	display: flex;
	justify-content: space-between;
	font-weight: 400;
	&:first-child {
		margin-top: 15px;
	}
`;


export default class StepsCards extends Component {
	onDragStart = (e) => {
		e.dataTransfer.setData('text/plain', e.target.getAttribute('data-id'));
	}
	onDragOver = (e) => {
		e.preventDefault();
		e.currentTarget.style.background = '#7f8082';
	}
	onDrop = (e) => {
		e.preventDefault();
		const data = e.dataTransfer.getData("text/plain");
		const element = document.querySelector(`[data-id="${data}"]`);
		e.currentTarget.style.background = `${variables.$ivory}`;
		e.dataTransfer.dropEffect = "move"

		try {
			e.currentTarget.appendChild(element);
  	} catch (error) {
    	console.warn("you can't move the item to the same place")
  	}
	}
	onDragExit = (e) => {
		e.currentTarget.style.background = `${variables.$ivory}`;
	}

	render() {
		return (
			<ListCard>
				<TitleListCard>Backlog</TitleListCard>
				<UlCards
					onDrop={(e)=>{this.onDrop(e)}}
					onDragOver={(e)=>this.onDragOver(e)}
					onDragLeave={(e)=>{this.onDragExit(e)}}
					data-id='drop'
				>
					<ListCardItem
						onDragStart={(e) => this.onDragStart(e)}						
						draggable
						data-id='100'
					>
						<TitleList>
							Arrumar lanterna traseira esquerda <Number>100</Number>
						</TitleList>
					</ListCardItem>
					<ListCardItem
						onDragStart={(e) => this.onDragStart(e)}						
						draggable
						data-id='200'
					>
						<TitleList>
							Limpar Nave <Number>200</Number>
						</TitleList>
						<SubCard>
							<ListCardSubItem
								onDragStart={(e) => this.onDragStart(e)}						
								draggable
								data-id='201'
							>
								<TitleSubList>
									Banheiro <Number>201</Number>
								</TitleSubList>
							</ListCardSubItem>
							<ListCardSubItem
								onDragStart={(e) => this.onDragStart(e)}						
								draggable
								data-id='202'
							>
								<TitleSubList>
									Cozinha <Number>202</Number>
								</TitleSubList>
							</ListCardSubItem>
						</SubCard>
					</ListCardItem>
				</UlCards>
			</ListCard>
		);
	}
}

