import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/Logo/logo-5.png";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="">
      <div>
        <div className="mt-5 pt-5 pb-5 footer bg-light">
          <div className=""> 
          <div className="container custom-footer">
            <div className="row ">
              <div className="col-lg-5 col-xs-12 about-company">
                <img src={footerLogo} alt="" />
                <p className="pr-5 text-dark-50">
                  Cooking is the art of preparing food using a variety of
                  techniques and ingredients. It can be a fun and rewarding
                  activity that allows you to express your creativity and
                  nourish your body.{" "}
                </p>

               <div className="d-flex gap-3"> 
                
                <FaFacebook style={{ fontSize: "2rem" }}></FaFacebook>
                <FaLinkedin style={{ fontSize: "2rem" }}></FaLinkedin>
                <FaGoogle style={{ fontSize: "2rem" }}></FaGoogle>
               </div>

              </div>
              <div className="col-lg-3 col-xs-12 links">
                <h4 className="mt-lg-0 mt-sm-3">Support</h4>
                <ul className="m-0 p-0">
                  <li>
                    - <Link> Account </Link>
                  </li>
                  <li>
                    - <a href="#">Support Center</a>
                  </li>
                  <li>
                    - <a href="#">Feedback</a>
                  </li>
                  <li>
                    - <a href="#">Contact Us</a>
                  </li>
                  <li>
                    - <a href="#">Blog</a>
                  </li>
                  <li>
                    - <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-xs-12 location">
                <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                <p>22, Bangladesh, Gulshan </p>
                <p className="mb-0">
                  <i className="fa fa-phone mr-3"></i>(541) 754-3010
                </p>
                <p>
                  <i className="fa fa-envelope-o mr-3"></i>recipehunter@.com
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/*  */}
        {/* <hr className="bg-light" /> */}
       <div className="bg-dark">
       <footer className="container custom-footer  py-2">
          <div className="d-flex justify-content-center">
            <Link
              className=" text-decoration-none text-primary text-white"
              to="/"
            >
              REciPe-PiLoT
            </Link>
            <span className="text-white">&copy; 2022 SEnior.</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="text-white">Powered by</span>
            <Link
              className="text-decoration-none text-primary text-white"
              to="/"
            >
              REciPe-PiLoT
            </Link>
          </div>
        </footer>
       </div>
      </div>
    </div>
  );
};

export default Footer;
