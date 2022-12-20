import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    user_name: "",
  });

  const signupHandler = () => {
    try {
      console.log("values====>", values.email, values.password);
    } catch (error) {
      console.log("Error in signupHandler===>", error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container className="w-25 border border-light rounded-2 shadow p-5">
          <h3 className="text-center pb-5">Signup Here</h3>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter name"
              value={values.user_name}
              onChange={(e) => setValues({ user_name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={(e) => setValues({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) => setValues({ password: e.target.value })}
            />
          </Form.Group>
          <Button variant="success" className="w-100" onClick={() => signupHandler()}>
            Signup
          </Button>
          <p className="py-2 text-center">Already Have an Account?</p>
          <Button variant="primary" className="w-100" onClick={() => navigate('/')}>
            Login
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Register;
