import React from "react";
import Container from "components/GridSystem/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        Copyright © 2020 <Link to="/">ClickBuy</Link>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
