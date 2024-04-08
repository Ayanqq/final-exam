import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';


function App() {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [counter, setCounter] = useState<number>(0)
    const [currentNumber, setCurrentNumber] = useState<number | string>(maxValue)
    const updateMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue);
    };
    const onIncreaseHadnler = () => {
        setCounter(counter + 1)
    }

    return (
        <div style={{ display: "flex", justifyContent: 'center', gap:'20px' }}>
            <SetCounter updateMaxValue={updateMaxValue}/>
            <Main>
                <Counter counter={counter} onIncreaseHadnler={onIncreaseHadnler} maxValue={maxValue}/>
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