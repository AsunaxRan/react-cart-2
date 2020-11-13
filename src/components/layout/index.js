import React from "react";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";
import Main from "components/shared/Main";

import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { GlobalStyle } from "components/styles";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{title ? title : "React Shopping Cart"}</title>
        <meta
          name="description"
          content={description || "React Shopping Cart"}
        />
      </Helmet>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};
