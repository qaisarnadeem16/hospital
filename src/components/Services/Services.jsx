import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
// import HeartEmoji from "../../img/t1.png";
import Glasses from "../../img/t2.png";
import Humble from "../../img/t3.png";
import opd from "../../img/t4.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import { Link } from "react-router-dom";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Hospital Treatment</span>
        <span>services</span>
        {/* <spane> 
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        <a href={Resume} download>
          {/* <button className="button s-button">Download CV</button> */}
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "12rem" }}
          // transition={transition}
        >
          <Link to="opd" >
          <Card
            emoji={opd}
            heading={"OPD"}
            detail={"The OPD is a crucial component of a hospital's services, and it serves patients who do not require admission or overnight stay in the hospital..."}
          />
          </Link>
        </motion.div>
        
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          // transition={transition}
        >
          <Link to="operationTheater" >

          <Card
            emoji={Humble}
            heading={"Operation Theater"}
            detail={"It is a critical area designed to provide a sterile and safe environment for surgeries and other invasive medical procedures"}
          />
          </Link>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          // transition={transition}
        >
          <Link to="PhysiotherapyDepartmnt" >

          <Card
            emoji={Glasses}
            heading={"Physiotherapy Department"}
            detail={
              "Physical Therapy Department, is a specialized unit within a hospital or healthcare facility that focuses on providing physiotherapy services..."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </Link>
        </motion.div>

         {/* 4th */}
         <motion.div
          initial={{ top: "10rem", left: "2rem" }}
          whileInView={{ left: "28rem" }}
          // transition={transition}
        >
          <Link to="laboratory" >

          <Card
            emoji={Glasses}
            heading={"Laboratory"}
            detail={
              " It is a specialized area where medical laboratory professionals conduct various diagnostic tests and monitoring of diseases and health conditions.."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </Link>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
