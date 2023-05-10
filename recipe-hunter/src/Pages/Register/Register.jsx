import React, { useContext,useState } from "react";
import { authProvider } from "../../Shared/Provider/UseProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { crateUserInfo,updateProfileUser,googleSignInMethod,gitHubSignInMethod} = useContext(authProvider);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  let location = useLocation();


  let from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.passsword.value;
    const photoUrl = form.photo.value;
    console.log(email, password,name,photoUrl);
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    crateUserInfo(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);

        updateProfileUser(name,photoUrl)
        .then(() => {
         console.log(name,photoUrl);
         navigate(from, { replace: true })
        }).catch((error) => {
         setError(error.message);
        });

        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });



}

// Google 
const googleSignIn = ()=>{
  googleSignInMethod()
  .then(()=>{
    navigate('/home/chief')
  })
  .catch((error) => {
    setError(error.message);
   });
  }
// Github  
const gitHubSignIn = ()=>{
  gitHubSignInMethod()
  .then(()=>{
    navigate('/home/chief')
  })
  .catch((error) => {
    setError(error.message);
   });
     
  };
    return (
        <>
        <Form onSubmit={handleRegister} className="container me-auto border  p-5 mt-5">
        <div className="">
          <div>
            <Form.Text><h1>Please Register</h1></Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control
                className=""
                type="text"
                name="name"
                placeholder=" your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                className=""
                type="text"
                name="photo"
                placeholder="photo url"
                required
              />
            </Form.Group>
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
                name="passsword"
                placeholder="Password"
                required
              />
            </Form.Group>
            <p className="text-danger">{error} </p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree Terms & Conditions" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Text>
                <span className="fs-5">
                  Already Have An Account?{" "}
                  <Link className='text-decoration-none' to="/login">
                    {" "}
                    <span className="text-danger">Please Login</span>
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
      <div className="container me-auto border  p-5 mt-5">
      <div className="d-flex   gap-3 mt-3">
    <button className="btn btn-outline-success py-2 w-50 d-flex align-items-center justify-content-center ">
      <FaGoogle
        style={{ fontSize: "1.5rem" }}
        className="mx-3"
      ></FaGoogle>{" "}
      <span onClick={googleSignIn} className="text-warning fs-3 fw-bold"> Google Login</span>
    </button>
    
    <button className="btn btn-outline-secondary py-2 w-50 d-flex align-items-center justify-content-center">
      <FaGithub
        style={{ fontSize: "1.5rem" }}
        className="mx-3"
      ></FaGithub>{" "}
      <span onClick={gitHubSignIn} className="text-primary fs-3 fw-bold"> Github Login</span>
    </button>
  </div></div>
        </>
    );
};

export default Register;