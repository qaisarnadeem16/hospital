import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img1 from '../img/Laboratory.jpg'
import img2 from '../img/lab (1).jpg'
import img3 from '../img/lab (2).jpg'
import img4 from '../img/lab (3).jpg'
const Laboratory = () => {
    return (
        <div className='main1'>
            <Navbar />
            <div className="opd">
                <div className="heading1">
                    <span>Services Includes in</span>
                    <span >Laboratory</span>
                </div>

                <div className="leftSide1">
                    <div className="">
                        <h5>The Laboratory, commonly referred to as the Medical Laboratory or Clinical Laboratory, is a vital component of a hospital or healthcare facility. It is a specialized area where medical laboratory professionals conduct various diagnostic tests and analyze patient samples to aid in the diagnosis, treatment, and monitoring of diseases and health conditions. The laboratory plays a critical role in providing accurate and timely information to healthcare providers, enabling them to make informed decisions about patient care.</h5>
                        <ul>
                            <li>Sample Collection Area</li>
                            <li>Hematology   </li>
                            <li>Clinical Chemistry   </li>
                            <li>Microbiology </li>
                            <li>Immunology/Immunohematology  </li>
                            <li>Clinical Pathology</li>
                            <li>Laboratory Professionals  </li>
                        </ul>
                    </div>
                    <div className="imgBox">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                        </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Laboratory
