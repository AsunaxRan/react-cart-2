import React from "react";
import Layout from "components/Layout";
import { Container } from "styled-bootstrap-grid";
import Checkbox from "components/Checkbox";

const Styleguides = () => {
  const handleCheckboxChange = (e) => {
    console.log("Checkbox: " + e.target.checked);
  };

  return (
    <Layout title="Styleguides">
      <Container>
        <h3>Checkbox</h3>
        <Checkbox />
        <Checkbox onChange={handleCheckboxChange} />
        <Checkbox checked={true} onChange={handleCheckboxChange} />
      </Container>
    </Layout>
  );
};

export default Styleguides;
