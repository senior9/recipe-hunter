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
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";



const Header = ({isActive}) => {
  const { user, logOut,displayName,photoUrl } = useContext(authProvider);
  console.log(photoUrl);
  const [active, setActive] = useState(false);

  // handleSign out
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };
  const renderTooltip = () => <Tooltip id="tooltip">{displayName}</Tooltip>;

  return (
    <>
      <Navbar   bg="light" variant="light">
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
            <Link style={{ color: isActive ? "green" : "blue" }} className="text-decoration-none text-secondary" to="/blog">
              Blog
            </Link>
            {/* <Link className="text-decoration-none text-dark" to="/home/chief">
              {user?.displayName}
            </Link> */}
              

            {user ? (
              <>
                
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
            {user && displayName && (
              <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                <div className="d-flex align-items-center">
                  <Image
                    title={displayName}
                    style={{ width: "40px", height: "40px" }}
                    src={photoUrl}
                    roundedCircle
                  />
                </div>
              </OverlayTrigger>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
