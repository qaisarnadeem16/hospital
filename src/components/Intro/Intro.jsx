import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/home.jpeg";
import img1 from "../../img/imgg (2).jpeg";
import img2 from "../../img/imgg (1).jpeg";
import img3 from "../../img/imgg (4).jpeg";
import img4 from "../../img/imgg (5).jpeg";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  // const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Drbuttpolyclinic</span>
          <span>Hospital</span>
          <span>
          To provide exceptional medical care with compassion and integrity, promoting the health and well-being of our patients and the community we serve
          </span>
        </div>  
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact Us</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="bannerr">  
        <img src={boy} alt="" />

      </div>
    </div>

    <div className="gallery">
      {/* <img src={img} alt="" /> */}
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      
    </div>

    </>
    
  );
};

export default Intro;
