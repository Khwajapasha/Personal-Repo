import React from "react";
import "./CustomGrid.css";
import {
  Col,
  Nav,
  Jumbotron,
  Button,
  Card,
  Row,
  Container,
} from "react-bootstrap";
import  CardImage1  from "../BlogPage/BlogImages/Khwaja.jpg";
import { BlogsDataWithImage } from "../BlogsDataWithImage/BlogsDataWithImage";
const CustomGrid = () => {
  return (
    <Container>
      <Jumbotron>
        <h2> Living India </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing eLinkt.
          Voluptatibus repellendus, .
        </p>

        <Button>More Info</Button>
      </Jumbotron>
      <Row>
        <Col>
          <input type="text" placeholder="Search" />
          <b>
            <Nav.Link>Fevorite</Nav.Link>
          </b>
          <Nav.Link>News</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <Nav.Link>Help</Nav.Link>
        </Col>
        <Col>
          <BlogsDataWithImage BlogerImg={CardImage1} />
        </Col>
        <Col>
          <Card className="card2">
            <Card.Img src={Image} />
            <Card.Body>
              <Card.Title>Khwaja Pasha</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="Search" />
          <b>
            <Nav.Link>Fevorite</Nav.Link>
          </b>
          <Nav.Link>News</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <Nav.Link>Help</Nav.Link>
        </Col>
        <Col>
          <Card style={{ width: "40rem", backgroundColor: "palevioletred" }}>
            <Card.Img variant="top" src={CardImage1} />
            <Card.Body>
              <Card.Title>Khwaja </Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                Voluptate eLinkgendi veritatis esse tempora, deleniti optio
                doloribus Linkbero quae. Voluptas, recusandae accusantium! Dolo{" "}
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card2">
            <Card.Img src={Image} />
            <Card.Body>
              <Card.Title>Khwaja Pasha</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card style={{ width: "40rem" }}>
        <Row>
          <Col>
            <Card.Img
              style={{ width: "8rem", height: "5rem" }}
              className="rounded-circle circle w-25"
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/18/15/billgates.jpg?width=668"
              alt="..."
            />
          </Col>
          <Col lg-11 pull-right className="card text-left">
            <Card.Body>
              <Card.Title>Khwaja Pasha</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing
              </Card.Text>

              <Button variant="primary">Like</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CustomGrid;
