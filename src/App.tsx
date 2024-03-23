import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";




function App() {
    return (
        <div style={{display:"flex", justifyContent:'center'}}>
            <Main>
                <Counter/>
            </Main>
        </div>
    );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  
  border: 5px solid #279eea;
  border-radius: 20px;
  gap:20px;
`