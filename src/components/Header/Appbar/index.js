import React, { useContext } from "react";
import styled from "styled-components";
import Cart from "components/Header/Cart";
import { Link } from "react-router-dom";
import { MdTouchApp } from "react-icons/md";
import { CartContext } from "contexts/CartContext";

const StyledAppbar = styled.div`
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

const Appbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <StyledAppbar>
      <Brand to="/">
        <MdTouchApp />
        <BrandText>ClickBuy</BrandText>
      </Brand>
      <Cart quantity={cart.cartItems.length} />
    </StyledAppbar>
  );
};

export default Appbar;
