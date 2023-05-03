import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Form className="container me-auto border w-50 p-5 mt-5">
      <div className="">
        <div>
        <Form.Text><h1>Please Login</h1></Form.Text>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="w-50"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="w-50"
              type="password"
              name="passsword"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Text>
              <span className="fs-5">
                New User?{" "}
                <Link className="text-decoration-none" to="/register">
                  {" "}
                  <span className="text-danger">Please Register</span>
                </Link>
              </span>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        <div className="d-flex flex-column  gap-3 mt-3">
          <button className="btn btn-outline-success py-2 w-50 d-flex align-items-center justify-content-center ">
            <FaGoogle
              style={{ fontSize: "1.5rem" }}
              className="mx-3"
            ></FaGoogle>{" "}
            <span className="text-warning fs-3 fw-bold"> Google Login</span>
          </button>
          <button className="btn btn-outline-secondary py-2 w-50 d-flex align-items-center justify-content-center">
            <FaGithub
              style={{ fontSize: "1.5rem" }}
              className="mx-3"
            ></FaGithub>{" "}
            <span className="text-primary fs-3 fw-bold"> Github Login</span>
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
