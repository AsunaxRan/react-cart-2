import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
`;

const Image = (props) => {
  return <StyledImage src={props.src} alt={props.alt} {...props} />;
};

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
