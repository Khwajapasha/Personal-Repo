import React from 'react';
import { Row, Col, } from 'react-simple-flex-grid';
import { Card,Button  } from 'react-bootstrap';
import "react-simple-flex-grid/lib/main.css";
import Image11 from "../Navigationbar/Images/Khwaja.jpg";
const FlexGrid = () => {
    return ( 

<Row gutter={40}>
   <Col span={4} className={"forcol"}>col-4</Col>
   <Col span={4}>col-4</Col>
   <Col span={4} offset={8}>
 <Card >
  <Card.Img src={Image11} alt="Card image" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row>
     );
}
 
export default FlexGrid;