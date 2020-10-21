import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../BloggerArea/CenterBlog.css";
import { BlogItemReducer } from "../BlogItemReducer";
import { BlogThread } from "./BlogThread";

export const CenterBlogs = () => {
  return (
    <Container>
      <Row>
        <Col>
          {BlogItemReducer.BlogData.map((item) => {
            return <BlogThread itemCurrent={item} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};
