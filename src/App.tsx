import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';


function App() {
    const [maxValue, setMaxValue] = useState<number>(0);
    //- это стейт для хранения максимального значения

    const [counter, setCounter] = useState<number>(0)
    //- это счетчик, который прибавляет +1

    const [currentNumber, setCurrentNumber] = useState<number>(maxValue)
    //- это счетчик, который отвечает за минимальное значение

    const onIncreaseHadnler = () => {
        setCounter(counter + 1)
    }

    const updateMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue);
    };

    const updateMinValue = (newMinValue: number) => {
        setCurrentNumber(newMinValue);
        // setCounter(newMinValue)
    }

    const resetButton = () => {
        setCounter(0)
        setCurrentNumber(0)
        setMaxValue(0)
    }

    const setNumbers = () => {
        setCurrentNumber(currentNumber)
    }

    return (
        <div style={{display: "flex", justifyContent: 'center', gap: '20px'}}>
            <SetCounter
                minValue={currentNumber}
                maxValue={maxValue}
                updateMaxValue={updateMaxValue}
                updateMinValue={updateMinValue}
                setNumbers={setNumbers}
                setCounter={setCounter}
                setMaxValue={setMaxValue}
            />
            <Main>
                <Counter
                    counter={counter}
                    onIncreaseHandler={onIncreaseHadnler}
                    maxValue={maxValue}
                    resetButton={resetButton}
                />
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
    gap: 20px;
`