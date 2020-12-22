import React from "react";
import { Form, Button } from "react-bootstrap";
import { Navibar } from "./Navigationbar/Navibar";
import { CenterBlogs } from "./BloggerArea/CenterBlogs";

export const Home = () => {
  return (
    <React.Fragment>
      <Navibar />
      <CenterBlogs />
      <Form style={{ width: "300px" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};
