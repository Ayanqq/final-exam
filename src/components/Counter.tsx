import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    maxValue:number
}

//todo:сделать инпут, disable переделать
export const Counter = ({maxValue}: CounterType) => {


    const addIncrement = () => {
        if (counter < currentNumber) {
            setCounter(counter + 1)
        }
    }

    const resetButton = () => {
        setCounter(0)
        setCurrentNumber('')
    }

    const counterOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const currentNumber = e.currentTarget.valueAsNumber
        setCurrentNumber(currentNumber)
    }




    return (
        <>
            <CounterMain>
                <StyledSpan color={counter === currentNumber ? 'red' : 'white'}>{counter}</StyledSpan>
            </CounterMain>
            <StyledButtons>
                <Button title={'inc'} onclick={addIncrement} disabled={counter === currentNumber}/>
                <Button title={'reset'} onclick={resetButton} disabled={counter < 1}/>
            </StyledButtons>
        </>
    );
};


type SpanType = {
    color: 'red' | 'white';
}

const CounterMain = styled.div`
  width: 200px;
  height: 100px;
  background-color: #279eea;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const StyledSpan = styled.span<SpanType>`
  font-size: 50px;
  color: ${props => props.color};
`

const StyledButtons = styled.div`
  display:flex;
  gap:5px;
  border:5px solid #279eea;
  padding:10px;
  border-radius:20px;
`

