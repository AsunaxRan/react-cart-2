import React from "react";
import Layout from "components/Layout";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Checkbox from "components/Checkbox";
import Image from "components/Image";

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

        <h3>Image</h3>
        <Row>
          <Col sm={2}>
            <Image />
          </Col>
          <Col sm={2}>
            <Image src="https://cf.shopee.vn/file/f3b25cb457c3e335f955ecbd72fdee7c_tn" />
          </Col>
          <Col sm={2}>
            <Image
              src="https://cf.shopee.vn/file/f3b25cb457c3e335f955ecbd72fdee7c_tn"
              alt="Shoppee"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Styleguides;
