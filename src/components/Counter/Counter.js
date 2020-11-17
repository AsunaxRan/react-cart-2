import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  display:flex;
  align-items:center;
/* Hide arrow input number*/
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
`;

const CounterButton = styled.button`
  cursor:pointer;
  outline:none;
  background:transparent; 
  width:2.5rem;
  padding: 5px;
  font-size:22px;
  align-items:center;
  border:none;
`;

const CounterInput = styled.input`
  padding:5px;
  width:2.5rem;
  height:1.5rem;
  outline:none;

`;
const Counter = () => {
  const [count, setCount] = useState(1);
  const counterRef = useRef();

  const increment = () => { isNaN(count) ? setCount(1) : setCount(parseInt(count) + 1); }
  const decrement = () => { count > 1 ? setCount(parseInt(count) - 1) : setCount(1); }
  const handleChange = () => {
    setCount(parseInt(counterRef.current.value));
  }


  return (
    <StyledCounter style={{ marginTop: "10px" }}>
      <CounterButton onClick={decrement}>-</CounterButton>

      <CounterInput
        value={count}
        ref={counterRef}
        onChange={handleChange}
        type="number"
      ></CounterInput>

      <CounterButton onClick={increment}>+</CounterButton>
    </StyledCounter>
  );
}
export default Counter;