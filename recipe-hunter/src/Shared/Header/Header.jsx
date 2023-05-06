import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bannerLogo from "../../assets/Logo/recipe-pilot-logo.png";
import { Link, Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Banner from "../Banner/Banner";
import { authProvider } from "../Provider/UseProvider";


const Header = () => {
  const { user, logOut } = useContext(authProvider);
  // console.log(logOut)

  // handleSign out
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/home/chief">
            <img src={bannerLogo} alt="" />
          </Link>
          <Nav className="d-flex gap-5 ">
            <Link
              className="text-decoration-none text-secondary "
              to="/home/chief"
            >
              Home
            </Link>
            <Link className="text-decoration-none text-secondary" to="/blog">
              Blog
            </Link>

            {user ? (
              <>
                <span className="mx-5">{user.email}</span>
                <Link to="/login"
                  onClick={handleSignOut}
                  className="text-decoration-none text-secondary"
                >
                  sign out
                </Link>
              </>
            ) : (
              <Link className="text-decoration-none text-secondary" to="/login">
                Login
              </Link>
            )}
            <Image src="holder.js/171x180" roundedCircle />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
