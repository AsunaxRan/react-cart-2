import React from "react";
import Layout from "components/Layout";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Checkbox from "components/Checkbox";
import Image from "components/Image";
import Product from "components/Product";
import Radio from "components/Radio";

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

        <h3>Product</h3>
        <Row>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name: "Sample name",
                price: {
                  current: 223,
                  old: 223,
                  onSale: false,
                },
                image:
                  "https://cf.shopee.vn/file/f3b25cb457c3e335f955ecbd72fdee7c_tn",
                url: "sample-slug",
                color: ["black"],
                brand: "Gucci",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: {
                  current: 100,
                  old: 80,
                  onSale: true,
                },
                image: "http://placeimg.com/640/480/fashion",
                url: "sample-slug",
                color: ["red", "yellow", "blue"],
                brand: "Aligator",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: {
                  current: 100,
                  old: 100,
                  onSale: false,
                },
                image: "http://placeimg.com/640/480/fashion",
                url: "sample-slug",
                color: ["red", "yellow", "blue"],
                brand: "Aligator",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: {
                  current: 100,
                  old: 80,
                  onSale: true,
                },
                image: "http://placeimg.com/640/480/fashion",
                url: "sample-slug",
                color: ["red", "yellow", "blue"],
                brand: "Aligator",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: {
                  current: 100,
                  old: 80,
                  onSale: true,
                },
                image: "http://placeimg.com/640/480/fashion",
                url: "sample-slug",
                color: ["red", "yellow", "blue"],
                brand: "Aligator",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: {
                  current: 100,
                  old: 80,
                  onSale: true,
                },
                image: "http://placeimg.com/640/480/fashion",
                url: "sample-slug",
                color: ["brown"],
                brand: "Aligator",
              }}
            />
          </Col>
        </Row>

        <h3>Radio</h3>
        <Row>
          <Col>
            <Radio name="sample-radio" />
            <Radio name="sample-radio" checked={true} />
            <Radio name="sample-radio-2" color="brown" />
            <Radio name="sample-radio-2" checked={true} color="brown" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Styleguides;
