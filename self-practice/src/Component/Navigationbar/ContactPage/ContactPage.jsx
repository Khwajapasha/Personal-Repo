import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ContactPage.css";
import BlogPage from "../../BlogPage/BlogPage";

export const ContactPage = () => {
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");

  const DisplayNameContent = (e) => {
    setName("");
  };
  const DisplayContactContent = (e) => {
    setContact("");
  };
  const DisplayAddressContent = (e) => {
    setAddress("");
  };
  return (
    
    <>
    <BlogPage/>
    
       <input
        type="text"
        value={Name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {"  "}
      <Button variant="outline-dark" onClick={(e) => DisplayNameContent(e)}>
        Clear Name
      </Button>
      <br></br>
      <br></br>
      <input
        type="text"
        value={Contact}
        placeholder="Contact"
        onChange={(e) => setContact(e.target.value)}
      />
      {"   "}
      <Button variant="outline-dark" onClick={(e) => DisplayContactContent(e)}>
        Clear Contact Number
      </Button>
      <br></br>
      <br></br>
      <input
        type="text"
        value={Address}
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      {"  "}
      <Button variant="outline-dark" onClick={(e) => DisplayAddressContent(e)}>
        Clear Address
      </Button>
      <br />
      Name: {Name}
      <br />
      Contact: {Contact}
      <br />
      Address:{Address}
      <br />
      <hr/>
      </>
    
  );
};
