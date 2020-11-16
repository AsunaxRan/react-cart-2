import React from "react";
import styled from "styled-components";
import Appbar from "components/Header/Appbar";
import { Container } from "styled-bootstrap-grid";

const StyledHeader = styled.header`
  background-color: #1976d2;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Appbar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
