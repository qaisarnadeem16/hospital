import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />

      <div className="f-content">
      <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Drbuttpolyclinic</span>
          {/* <span>Hospital</span> */}
      </div>

       <div>
          <ul style={{ listStyleType: "none" }}  className="list1">
            <li>
              <RouterLink to="/">
                Home
              </RouterLink>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
         
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>

            <li>
              <Link to="opd" spy={true} smooth={true}>
                OPD
              </Link>
            </li>

            <li>
              <Link to="laboratory" spy={true} smooth={true}>
                Laboratiry
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
