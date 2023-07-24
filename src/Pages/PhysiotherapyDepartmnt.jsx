import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img2 from '../img/immgg.jpg'
const PhysiotherapyDepartmnt = () => {
    return (
        <div className='main1'>
            <Navbar />
            <div className="opd">
                <div className="heading1">
                    <span>Services Includes in</span>
                    <span >Physiotherapy Department </span>
                </div>

                <div className="leftSide1">
                    <div className="">
                        <h5>The Physiotherapy Department, also known as the Physical Therapy Department, is a specialized unit within a hospital or healthcare facility that focuses on providing physiotherapy services. Physiotherapy is a healthcare profession that aims to promote, restore, and maintain physical function and mobility in individuals with various health conditions or injuries. It uses a combination of physical methods, exercises, and therapeutic techniques to improve patients' overall well-being and functional abilities.</h5>
                        <ul>
                            <li>Treatment Rooms</li>
                            <li>Exercise Area  </li>
                            <li>Modalities Area </li>
                            <li>Hydrotherapy Pool </li>
                            <li>Assessment and Evaluation Space </li>
                            <li>Patient Education Area</li>
                            <li>Medical Records Section  </li>
                        </ul>
                    </div>
                    <div className="">
                        <img src={img2} alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PhysiotherapyDepartmnt
