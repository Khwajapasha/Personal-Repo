import React from "react";
import LikeLogo from "../BloggerArea/images/LikeSvgDark.svg";
import CommentLogo from "../BloggerArea/images/CommentSvg.svg";
import PinLogo from "../BloggerArea/images/PushPinSvg.svg";
import { Col, Card, Row } from "react-bootstrap";

export const BlogThread = ({ itemCurrent }) => {
  const imgPath = itemCurrent.BlogerImage;
  return (
    <Card className="blogcard">
      <Row>
        <Col lg={2} className="blogcol">
          <Card.Img
            className="rounded-circle circle w-12 img"
            src={imgPath}
            alt=""
          />
        </Col>
        <Col lg={9}>
          <Card.Body>
            <Card.Title>{itemCurrent.BlogerName}</Card.Title>
            <Card.Text>
              {" "}
              <small>{itemCurrent.BlogDescription}</small>{" "}
            </Card.Text>
            <button style={{ fontSize: "10px" }}>
              <img src={PinLogo} alt=" " style={{ width: "20px" }} />
            </button>
            <button style={{ fontSize: "10px" }}>
              <img src={PinLogo} alt=" " style={{ width: "20px" }} />
            </button>
            <span style={{ fontSize: "12px" }}>Pin</span>
            <button
              style={{
                fontSize: "10px",

                marginInlineStart: "40px",
              }}
            >
              <img src={LikeLogo} alt=" " style={{ width: "20px" }} />{" "}
            </button>
            <span style={{ fontSize: "12px" }}>Like</span>
            <button
              style={{
                fontSize: "10px",

                marginInlineStart: "40px",
              }}
            >
              <img src={CommentLogo} alt=" " style={{ width: "20px" }} />
            </button>
            <span style={{ fontSize: "12px" }}>Buzz</span>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
