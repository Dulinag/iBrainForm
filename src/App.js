import './App.css';
import styled from 'styled-components';
import * as React from 'react'
import {Link} from 'react-router-dom';



import MainRoutes from './main';

const RowContainer = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: lightblue;

  
  margin: auto;
`

const RowItem = styled.div`


border: 1px solid black;
width: 10vw
allign-items: center;
background-color: lightblue;

`

const Naver = styled.div`

color: white
background-color: black
`



function App() {


  return (



      
    <>
    
    
    <MainRoutes />

    </>

  )


}

export default App;

