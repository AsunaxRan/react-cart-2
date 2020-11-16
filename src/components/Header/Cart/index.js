import React from "react";
import { MdShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartIcon = styled.span`
  font-size: 24px;
  display: inline-flex;
`;

const CartText = styled.span`
  display: none;
`;

const CartQuantity = styled.span`
  display: ${({ quantity }) =>
    quantity && quantity > 0 ? "inline-block" : "none"};
  background-color: rgb(253, 216, 53);
  font-weight: 700;
  font-size: ${({ quantity }) => (quantity > 9 ? "10px" : "inherit")};
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  text-align: center;
`;

const StyledCart = styled(Link)`
  cursor: pointer;
  align-items: center;
  display: inline-flex;
  color: #fff;
  position: relative;
  font-size: 13px;
  vertical-align: middle;
  border: none;
  padding: 8px 10px;
  border-radius: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border: 2px solid #fff;

    ${CartIcon} {
      font-size: 20px;
      margin-right: 8px;
    }

    ${CartText} {
      display: inline;
      margin-right: 8px;
      letter-spacing: 1px;
    }

    ${CartQuantity} {
      color: rgb(74, 74, 74);
      display: inline-block;
      height: 20px;
      line-height: 20px;
      border-radius: 2px;
      padding: 0px 6px;
      width: auto;
      position: static;
      font-size: inherit;
    }
  }
`;

const Cart = ({ quantity }) => {
  return (
    <StyledCart to="/cart">
      <CartIcon>
        <MdShoppingCart />
      </CartIcon>
      <CartText>Cart</CartText>
      <CartQuantity quantity={quantity}>{quantity}</CartQuantity>
    </StyledCart>
  );
};

export default Cart;

Cart.propTypes = {
  quantity: PropTypes.number.isRequired,
};
