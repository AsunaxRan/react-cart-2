import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderCart from "components/HeaderCart";
import { MdTouchApp } from "react-icons/md";
import Container from "components/GridSystem/Container";

const StyledHeader = styled.header`
  background-color: #1976d2;
`;

const Appbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Brand = styled(Link)`
  display: inline-block;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;

const BrandText = styled.span`
  font-size: 18px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container maxWidth="xl">
        <Appbar>
          <Brand to="/">
            <MdTouchApp />
            <BrandText>ClickBuy</BrandText>
          </Brand>
          <HeaderCart />
        </Appbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
