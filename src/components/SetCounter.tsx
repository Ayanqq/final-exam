import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    minValue:number
    maxValue:number
    setCount: (min: number, max: number)=>void
}

//todo:сделать инпут, disable переделать
export const SetCounter = ({maxValue, minValue, setCount}: CounterType) => {
    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)


    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setMax(value)
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        setMin(value);
    }

    const setCounterHandler = () => {
        setCount(min, max)
    }

    const disabled = min < 0 || max < 0
    if (min < 0) {
        setMin(min)
    }

    if (max < 0) {
        setMax(max)
    }
    //при клике на SetCounterHandler - maxValue должно получать данные с maxValueHandler

    // const onBlurHandler = () => {
    //     setMax(Number('s '))
    //     setMin(Number(' '))
    // }

    return (
        <StyledDiv>
                <span>
                    max value
                    <input
                        value={max}
                        onChange={maxValueHandler}
                        type='number'/>
                </span>
                <span>
                    min value
                    <input
                        value={min}
                        onChange={minValueHandler}
                        type='number'/>
                </span>
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

