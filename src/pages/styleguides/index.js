import React from "react";
import { Container } from "styled-bootstrap-grid";
import Checkbox from "components/Checkbox";

const Styleguides = () => {
  const handleCheckboxChange = (e) => {
    console.log("Checkbox: " + e.target.checked);
  };

  return (
    <Container>
      <h3>Checkbox</h3>
      <Checkbox />
      <Checkbox onChange={handleCheckboxChange} />
      <Checkbox checked={true} onChange={handleCheckboxChange} />
    </Container>
  );
};

export default Styleguides;
