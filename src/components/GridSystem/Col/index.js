import React from "react";
import styled from "styled-components";

const StyledCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 0 0 ${({ theme, sm }) => (sm / theme.columns) * 100 + "%"};
    max-width: ${({ theme, sm }) => (sm / theme.columns) * 100 + "%"};
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

const Col = ({ sm, md, lg, xl, xxl, children }) => {
  return (
    <StyledCol sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      {children}
    </StyledCol>
  );
};

export default Col;
