import React from "react";
import Image1 from "../Images/AmjadSir.jpg";
import Image2 from "../Images/Khwaja.jpg";
import Image3 from "../Images/Tausif.jpg";
import Image4 from "../Images/Zuber.jpg";
import Image5 from "../Images/Salman.jpg";
import Image6 from "../Images/Khuddus.jpg";
import Image7 from "../Images/Zeeshan.jpg";
import { Card, CardGroup, Button } from "react-bootstrap";
import FlexGrid from "../../FlexGrid/FlexGrid";
export const AboutPage = () => {
  return (
    <div>
      <CardGroup>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Image1} />
          <Card.Body>
            <Card.Title>AMJAD KHAN</Card.Title>
            <Card.Text>Founder Of PickupBizz</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Image7} />
          <Card.Body>
            <Card.Title>Zeeshan Khan</Card.Title>
            <Card.Text>UI Developer</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }}>
          <Card.Img style={{ height: "195px" }} variant="top" src={Image2} />
          <Card.Body>
            <Card.Title>Khwaja Pasha</Card.Title>
            <Card.Text>React Developer </Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Image3} />
          <Card.Body>
            <Card.Title>Tausif Iqbal</Card.Title>
            <Card.Text>Angular React Developer</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Image4} />
          <Card.Body>
            <Card.Title>Zuber Dange</Card.Title>
            <Card.Text>Web Designing Developer</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Image5} />
          <Card.Body>
            <Card.Title>Salmaan Khan</Card.Title>
            <Card.Text>Backend Developer</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem" }}>
          <Card.Img style={{ height: "195px" }} variant="top" src={Image6} />
          <Card.Body>
            <Card.Title>Khaddus Shaikh</Card.Title>
            <Card.Text>Backend Developer</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <FlexGrid />
    </div>
  );
};
