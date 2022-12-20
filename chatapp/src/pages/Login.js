import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const loginHandler = () => {
    try {
      console.log("values====>", values.email, values.password);
    } catch (error) {
      console.log("Error in LoginHandler===>", error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container className="w-25 border border-light rounded-2 shadow p-5">
          <h3 className="text-center pb-5"> Login Here </h3>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={(e) => setValues({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) => setValues({ password: e.target.value })}
            />
          </Form.Group>
          <Button
            variant="success"
            className="w-100"
            onClick={() => loginHandler()}
          >
            Login
          </Button>
          <p className="py-2 text-center">Don't Have an Account?</p>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => navigate("/signup")}
          >
            Signup
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Login;
