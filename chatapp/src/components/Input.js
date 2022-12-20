import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Input = () => {
  const [message, setMessage] = useState("");
  return (
    <>
      <Form.Control
        as="textarea"
        placeholder="Type Message..."
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};

export default Input;
