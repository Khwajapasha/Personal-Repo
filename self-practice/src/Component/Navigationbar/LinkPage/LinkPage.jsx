import React from "react";
import CustomGrid from "../../CustomGrid/CustomGrid";
import { Form, Button } from "react-bootstrap";
export const LinkPage = () => {
  return (
    <div>
      <CustomGrid />
    <Form>
      <Form.Group controlId="formBasicText">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="Text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  </div>
  );
};
