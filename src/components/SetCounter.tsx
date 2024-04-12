import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    minValue:number
    maxValue:number
    updateMaxValue:(newMaxValue: number) => void;
    updateMinValue:(newMinValue: number)=> void;
    setNumbers:(minValue:number) => void;
    setCounter:(setCounter:number)=> void
    setMaxValue:(newMaxValue: number)=> void;
}

//todo:сделать инпут, disable переделать
export const SetCounter = ({maxValue, minValue, updateMaxValue, updateMinValue, setNumbers, setCounter, setMaxValue}: CounterType) => {


    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        updateMaxValue(value) // отсюда нужно перенести как то в updateMaxValue
        // setMaxValue(value) // отсюда нужно перенести как то в updateMaxValue
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        updateMinValue(value);
    }

    const setCounterHandler = () => {
        updateMaxValue(maxValue) // отвечает за максимальное значение
        // setMaxValue(maxValue)
        setNumbers(minValue); // отвечает за минимальное значение
        setCounter(minValue); //отвечает за размещение числа в сам счетчик
    }

    const disabled = maxValue < 0 || minValue < 0
    if (maxValue < 0) {
        updateMaxValue(-1)
    }

    if (minValue < 0) {
        updateMinValue(-1)
    }
    //при клике на SetCounterHandler - maxValue должно получать данные с maxValueHandler


    return (
        <StyledDiv>
                <span>max value <input value={maxValue} onChange={maxValueHandler} type='number'/></span>
                <span>start value <input value={minValue} onChange={minValueHandler} type='number'/></span>
            <StyledButtons>
                <Button title={'set'} onclick={setCounterHandler} disabled={disabled}/>
            </StyledButtons>
        </StyledDiv>
    );
};


const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    border:5px solid #279eea;
    border-radius:20px;
    gap:20px;
`


const StyledButtons = styled.div`
  display:flex;
  justify-content:center;
  border:5px solid #279eea;
  padding:10px;
  border-radius:20px;
`

