import React from "react";
import { Alert } from "react-bootstrap";

const Alert = (props) => {
  return (
    <>
      <Alert variant={danger}>Alert: props.{errorMessage}</Alert>
    </>
  );
};

export default Alert;
