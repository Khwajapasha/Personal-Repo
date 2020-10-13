

import React from 'react';
import './CustomGrid.css';

import { Col,  Jumbotron, Button, Card, Row} from 'react-bootstrap';
import {Image} from "../Navigationbar/Images/AmjadSir.jpg";
const CustomGrid = () => {
    return ( 
         <Container-fluid >
        
        <Jumbotron>
            
             <h2> Welcome to the my kingdom </h2>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus repellendus, 
               .</p>
            <Button bsStyle>More Info</Button>
            </Jumbotron>
          <Row >    
        <Col  >
        <Col>
             <input type="text" placeholder="Search" />
             <ul>
                 <b><li >Fevorite</li></b>
                 <li>News</li>
                 <li>Blog</li>
                 <li>Contact</li>
                 <li>Help</li>
             </ul>
          </Col>
        </Col>
      <Col sm-1 xm-1 md-2 lg-2 xl-3>
         <Card className="card1">
        <Card.Img  variant="top"  />
        <Card.Body>
          <Card.Title>Khwaja Pasha</Card.Title>
          <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Voluptate eligendi veritatis esse tempora, 
              deleniti optio doloribus libero quae. Voluptas, recusandae
               accusantium! Dolo </Card.Text>
          <Button variant="primary">Like</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col>
         <Card className="card2" >
        <Card.Img   src={Image} />
        <Card.Body>
          <Card.Title>Khwaja Pasha</Card.Title>
          <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Voluptate eligendi veritatis esse tempora, 
              deleniti optio doloribus libero quae. Voluptas, recusandae
               accusantium! Dolo </Card.Text>
          <Button  variant="primary">Like</Button>
        </Card.Body>
      </Card>
      </Col>
     </Row>
        </Container-fluid>
        
        
    );
}
 
export default CustomGrid;