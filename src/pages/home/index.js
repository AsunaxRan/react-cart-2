import React from "react";
import Layout from "components/Layout";
import { Container, Row, Col } from "styled-bootstrap-grid";

const Index = () => {
  return (
    <Layout title="Home - React Store" description="React shopping cart">
      <Container>
        <Row>
          <Col sm={4} xl={3}>
            sm-4.xl-3
          </Col>
          <Col sm={4} xl={3}>
            sm-4.xl-3
          </Col>
          <Col sm={4} xl={3}>
            sm-4.xl-3
          </Col>
          <Col sm={4} xl={3}>
            sm-4.xl-3
          </Col>
          <Col>sm-4.xl-3</Col>
          <Col>sm-4.xl-3</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
