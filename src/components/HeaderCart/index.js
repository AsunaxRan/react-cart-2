import React from "react";
import { MdShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = styled(Link)`
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  color: #fff;
  position: relative;
  font-size: 13px;
  vertical-align: middle;
  border: 2px solid #fff;
  padding: 8px 10px;
  border-radius: 4px;
`;

const CartIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
  display: inline-flex;
`;

const CartText = styled.span`
  margin-right: 8px;
`;

const CartQuantity = styled.span`
  display: inline-block;
  background-color: rgb(253, 216, 53);
  font-weight: 700;
  border-radius: 2px;
  color: rgb(74, 74, 74);
  padding: 0 6px;
  height: 20px;
  line-height: 20px;
`;

const HeaderCart = () => {
  return (
    <Cart to="/cart">
      <CartIcon>
        <MdShoppingCart />
      </CartIcon>
      <CartText>Cart</CartText>
      <CartQuantity>4</CartQuantity>
    </Cart>
  );
};

export default HeaderCart;
