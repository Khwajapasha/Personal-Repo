import React from "react";
import ImgLogo from "../Images/AmjadSir.jpg";
import { Card, CardGroup, Button } from "react-bootstrap";
export const AboutPage = () => {
  return (
    <CardGroup>
      <Card
        className="text-center"
        style={{ width: "18rem", Hieght: "10%" }}
        border="secondary"
      >
        <Card.Img />
        <Card.Body>
          <Card.Title>Asdff</Card.Title>
          <Card.Text>sdfgsdf</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ImgLogo} />
        <Card.Body>
          <Card.Title>AMJAD KHAN</Card.Title>
          <Card.Text>Founder Of PickupBizz</Card.Text>
          <Button variant="primary">Like</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
