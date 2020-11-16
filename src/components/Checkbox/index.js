import React from "react";
import styled from "styled-components";

const Checkmark = styled.span`
  user-select: none;
  position: relative;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  text-align: center;
  box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.02);
  margin-right: 8px;

  &:before {
    position: absolute;
    content: "";
    height: 6px;
    width: 10px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
    left: 3px;
    top: 3px;
  }
`;

const Input = styled.input`
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;

  &:checked ~ ${Checkmark} {
    background: rgb(13, 92, 182);
    border-color: rgb(13, 92, 182);
  }

  &:checked ~ ${Checkmark}:before {
    border-color: #fff;
    position: absolute;
    content: "";
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
    left: 3px;
    top: 3px;
  }
`;

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  max-width: 400px;
`;

const Checkbox = (props) => {
  const checked =
    props.checked && typeof props.checked === "boolean" ? props.checked : false;

  const handleChange =
    props.onChange && typeof props.onChange === "function"
      ? props.onChange
      : onChange();

  function onChange() {}

  return (
    <StyledCheckbox>
      <Input type="checkbox" onChange={handleChange} defaultChecked={checked} />
      <Checkmark />
    </StyledCheckbox>
  );
};

export default Checkbox;
