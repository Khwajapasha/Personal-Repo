import React from "react";
import { Col, Button, Card, Row, Container } from "react-bootstrap";

export const BlogsDataWithImage = ({
  BlogerImg,
  NameOfBlogger,
  DelayTime,
  Description,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "40rem", backgroundColor: "gray" }}>
            <Row>
              <Col lg={2} md={2} sm={2} xl={2}>
                <Card.Img
                  className="rounded-circle circle w-12"
                  src={BlogerImg}
                  alt=""
                />
                <Button
                  variant="primary"
                  style={{
                    marginTop: "10px",
                    marginLeft: "30px",
                    marginBottom: "5px",
                  }}
                >
                  Like
                </Button>
              </Col>
              <Col lg={10} md={10} sm={10} xl={10}>
                <Card.Body>
                  <Card.Title>Billgates </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                    Voluptate eLinkgendi veritatis esse tempora, deleniti optio
                    doloribus Linkbero quae. Voluptas, recusandae accusantium!
                    Dolo{" "}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
