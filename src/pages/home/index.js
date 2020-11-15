import React from "react";
import Layout from "components/Layout";
import Container from "components/GridSystem/Container";
import Row from "components/GridSystem/Row";
import Col from "components/GridSystem/Col";

const Index = () => {
  return (
    <Layout title="Home - React Store" description="React shopping cart">
      <Container>
        <div>Home page</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-15px",
            marginRight: "-15px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              flex: "0 0 33.333333%",
              maxWidth: "33.333333%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            sm-4
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              flex: "0 0 33.333333%",
              maxWidth: "33.333333%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            sm-4
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              flex: "0 0 33.333333%",
              maxWidth: "33.333333%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            sm-4
          </div>
        </div>
        <Row>
          <Col sm={4}>sm-4.xl-3</Col>
          <Col sm={4}>sm-4.xl-3</Col>
          <Col sm={4}>sm-4.xl-3</Col>
          <Col sm={4}>sm-4.xl-3</Col>
          <Col>sm-4.xl-3</Col>
          <Col>sm-4.xl-3</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
