import React from "react";
import { Button } from "react-bootstrap";

const Button = (props) => {
  return (
    <>
      <Button variant={props.variant} size="sm">
        {props.label}
      </Button>
    </>
  );
};

export default Button;
