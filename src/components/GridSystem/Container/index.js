import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: ${({ theme, maxWidth }) =>
    theme.breakpoints[maxWidth] ? theme.breakpoints[maxWidth] : "100%"};
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.containers.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.containers.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.containers.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ theme }) => theme.containers.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    max-width: ${({ theme }) => theme.containers.xxl};
  }
`;

const Container = ({ maxWidth, children }) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

export default Container;

Container.propTypes = {
  maxWidth: PropTypes.string,
  children: PropTypes.node,
};
