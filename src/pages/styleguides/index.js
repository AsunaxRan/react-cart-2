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
                price: 44.55,
                image:
                  "https://cf.shopee.vn/file/f3b25cb457c3e335f955ecbd72fdee7c_tn",
                slug: "sample-slug",
                color: [],
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: 102.5,
                image: "http://placeimg.com/640/480/fashion",
                slug: "sample-slug",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: 102.5,
                image: "http://placeimg.com/640/480/fashion",
                slug: "sample-slug",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: 102.5,
                image: "http://placeimg.com/640/480/fashion",
                slug: "sample-slug",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: 102.5,
                image: "http://placeimg.com/640/480/fashion",
                slug: "sample-slug",
              }}
            />
          </Col>
          <Col sm={4} lg={3}>
            <Product
              product={{
                name:
                  "Sample name 2 long sample dsg sdgs gfd etre sdgsdg sdgdsg ewtwe wetv f",
                price: 102.5,
                image: "http://placeimg.com/640/480/fashion",
                slug: "sample-slug",
              }}
            />
          </Col>
        </Row>

        <h3>Radio</h3>
        <Row>
          <Col>
            <Radio />
            <Radio name="sample-radio" />
            <Radio name="sample-radio" checked={true} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Styleguides;
