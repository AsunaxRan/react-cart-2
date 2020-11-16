import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "components/Image";
import PropTypes from "prop-types";

const RatioPlaceholder = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
`;

const Thumbnail = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.p`
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 100%;
  min-height: 40px;
  color: rgb(36, 36, 36);
  font-size: 1rem;
  line-height: 1.2;
  text-overflow: ellipsis;
  margin-top: 8px;
  overflow: hidden;
`;

const Price = styled.div`
  align-self: stretch;
  padding-top: 5px;
  font-weight: 700;
`;

const CurrentPrice = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const OldPrice = styled.span`
  color: ${({ theme }) => theme.color.secondary};
  font-size: 85%;
  margin-left: 8px;
  text-decoration: line-through;
`;

const Promotion = styled.span`
  font-size: 12px;
  color: #fff;
  text-align: center;
  display: block;
  position: absolute;
  z-index: 1;
  background: ${({ theme }) => theme.color.primary};
  line-height: 12px;
  border-radius: 2px;
  left: 16px;
  top: 16px;
  padding: 4px 8px;
`;

const Brand = styled.div`
  margin-top: 8px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
`;

const StyledProduct = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 16px;
  transition: 0.2s all ease;

  &:hover {
    z-index: 1;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.35);
  }
`;

const Product = (props) => {
  const { name, image, price, brand, url } = props.product;

  return (
    <StyledProduct to={`/detail/${url}`} title={name}>
      <RatioPlaceholder>
        <Thumbnail src={image} alt={name} />
      </RatioPlaceholder>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
      <Price>
        <CurrentPrice>{"$" + price.current}</CurrentPrice>
        {price.onSale && <OldPrice>{"$" + price.promotion}</OldPrice>}
        {price.onSale && <Promotion>Promotion</Promotion>}
      </Price>
    </StyledProduct>
  );
};

export default Product;

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.shape({
    current: PropTypes.number.isRequired,
    promotion: PropTypes.number.isRequired,
    onSale: PropTypes.bool.isRequired,
  }).isRequired,
  brand: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
