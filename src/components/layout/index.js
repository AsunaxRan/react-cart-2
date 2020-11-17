import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title : "React Shopping Cart"}</title>
        <meta
          name="description"
          content={description || "React Shopping Cart"}
        />
      </Helmet>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
