import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import { Button } from "./Button";

type CounterType = {
    // value:
    updateMaxValue:(newMaxValue: number) => void;
}

//todo:сделать инпут, disable переделать
export const SetCounter = (props: CounterType) => {


    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
    }

    const minValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)

    }



    return (
        <StyledDiv>
                <span>max value <input value={maxValue} onChange={maxValueHandler} type='number'/></span>
                <span>start value <input value={minValue} onChange={minValueHandler} type='number'/></span>
            <StyledButtons>
                <Button title={'set'} onclick={()=> {}} disabled={result} />
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

