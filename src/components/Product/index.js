import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "components/Image";

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

const Name = styled.div`
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 100%;
  min-height: 40px;
  color: rgb(36, 36, 36);
  font-size: 1rem;
  line-height: 1.2;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-top: 8px;
  overflow: hidden;
`;

const Price = styled.p`
  align-self: stretch;
  color: rgb(36, 36, 36);
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 5px;
`;

const StyledProduct = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 16px;
  text-align: center;
  transition: 0.2s all ease;

  &:hover {
    z-index: 1;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.35);
  }
`;

const Product = (props) => {
  const { name, image, price, slug } = props.product;

  return (
    <StyledProduct to={`/detail/${slug}`} title={name}>
      <RatioPlaceholder>
        <Thumbnail src={image} alt={name} />
      </RatioPlaceholder>
      <Name>{name}</Name>
      <Price>{`$${price}`}</Price>
    </StyledProduct>
  );
};

export default Product;
