import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Frame1 from './frame.jsx'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SubTitle = styled.h2`
  font-size: 1.0em;
  text-align: center;
  color: black;
`;

const Grid = styled.table`
	margin-left: 320px;	
`;

const Pin = styled.td`
	color:white;
	background-color:#0000ff;
	width:20px;
	height:20px;
  	border: 1px solid palevioletred;
	border-color:white;
	text-align: center;
`;

class HelloMessage extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		total_score:0,
  		frame:0,
  		current_frame_score:0
  	}
  }
  render() {
    return (
      	<div>
      	<Title> Bowling Game </Title>
        	<SubTitle> # of Pins </SubTitle>
        	<Grid>
        	<tbody>
				<tr>
					<Pin>1</Pin>
					<Pin>2</Pin>
					<Pin>3</Pin>
				</tr>
				<tr>
					<Pin>4</Pin>
					<Pin>5</Pin>
					<Pin>6</Pin>
				</tr>
				<tr>
					<Pin>7</Pin>
					<Pin>8</Pin>
					<Pin>9</Pin>
				</tr>
				<tr>
					<td></td>
					<Pin>10</Pin>
					<td></td>
				</tr>
				</tbody>
			</Grid>
			<table>
				<tbody>
					<tr>
						<td><Frame1 round='1'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='2'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='3'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='4'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='5'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='6'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='7'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='8'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='9'  score = {this.current_frame_score}/></td>
						<td><Frame1 round='10'  score = {this.current_frame_score}/></td>
					</tr>
				</tbody>
			</table>
      	</div>
    );
  }
}

ReactDOM.render(
  <HelloMessage/>,
  document.getElementById('app')
);