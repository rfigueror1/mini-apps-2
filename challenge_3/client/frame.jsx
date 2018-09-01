import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Frame2 = styled.div`
	margin-left: 320px;
	width = 100px;
	height = 150px	
`;

const Box = styled.div`
	margin-left: 320px;
	width = 20px;
	height = 20px	
`;

const Scored_Box = styled.div`
	margin-left: 320px;
	width = 20px;
	height = 20px	
`;

const Header = styled.div`
	margin-left: 320px;
	width = 100px;
	height = 10px
	text-align: center;	
`;	

export default function Frame1(props) {
  return (<Header>{props.round}</Header>);
}

