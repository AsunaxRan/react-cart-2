import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRadio = styled.label`
  cursor: pointer;
`;

const Checkmark = styled.span`
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  color: rgb(120, 120, 120);
  border: 1px solid rgb(120, 120, 120);
  border-radius: 50%;

  &:before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    background-color: rgb(13, 92, 182);
    transform: scale(0);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

const Input = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  visibility: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  opacity: 0;

  &:checked + ${Checkmark} {
    border-color: rgb(13, 92, 182);
  }

  &:checked + ${Checkmark}:before {
    transform: scale(1);
  }
`;

const Radio = ({ name, value, checked }) => {
  return (
    <StyledRadio>
      <Input type="radio" name={name} value={value} defaultChecked={checked} />
      <Checkmark />
    </StyledRadio>
  );
};

export default Radio;

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  checked: PropTypes.bool,
};
