import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 10px 15px;
  text-align: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </StyledHeader>
  );
};

export default Header;
