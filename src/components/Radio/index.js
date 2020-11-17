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
  border: 1px solid rgb(120, 120, 120);
  border-radius: 50%;

  &:before {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme, color }) =>
      color ? color : theme.color.primary};
    transform: scale(0);
    border-radius: 50%;
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
    border-color: ${({ theme, color }) =>
      color ? "rgb(120, 120, 120)" : theme.color.primary};
  }

  &:checked + ${Checkmark}:before {
    transform: scale(1);
  }
`;

const Radio = ({ name, value, checked, color }) => {
  return (
    <StyledRadio>
      <Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        color={color}
      />
      <Checkmark color={color} />
    </StyledRadio>
  );
};

export default Radio;

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  checked: PropTypes.bool,
  color: PropTypes.string,
};
