import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../../Shared/Provider/UseProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const {signIn} = useContext(authProvider);
  const [error,setError] = useState(null) ;
  const navigate =useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target
    const  email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
      signIn(email,password)
    .then ((result)=>{
        const createUser = result.user
        console.log(createUser);
        navigate('/home/chief')
        form.reset();
    })
    .catch((error) => {
        setError(error.message);
        // ..
      });
     
 }




  return (
    <Form onSubmit={handleSignIn} className="container me-auto border  p-5 mt-5">
      <div className="">
        <div>
        <Form.Text><h1>Please Login</h1></Form.Text>
        {error && <div className="alert alert-danger">{error}</div>}


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className=""
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className=""
              type="password"
              name="password"
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
      </div>
    </Form>

  );
};

export default Login;
