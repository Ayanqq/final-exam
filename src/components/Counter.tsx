import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    counter:number
    onIncreaseHandler:()=> void;
    maxValue:number
    resetButton:()=> void

}

//todo:сделать инпут, disable переделать
export const Counter = ({maxValue, counter, onIncreaseHandler, resetButton}: CounterType) => {


    const addIncrement = () => {
        if (counter < maxValue) {
            onIncreaseHandler()
        }
    }



    return (
        <>
            <CounterMain>
                <StyledSpan color={counter === maxValue ? 'red' : 'white'}>{counter}</StyledSpan>
            </CounterMain>
            <StyledButtons>
                <Button title={'inc'} onclick={addIncrement} disabled={counter === maxValue}/>
                {/*но чтобы проверить maxValue - туда должно что то попатсь, и попадать должно только тогда, когда set*/}
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

