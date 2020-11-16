import React from "react";
import styled from "styled-components";
import Appbar from "components/Header/Appbar";
import Container from "components/GridSystem/Container";

const StyledHeader = styled.header`
  background-color: #1976d2;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container maxWidth="xl">
        <Appbar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
