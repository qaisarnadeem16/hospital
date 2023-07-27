import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img1 from '../img/opd (1).jpeg'
import img2 from '../img/opd (2).jpeg'
import img3 from '../img/opd (3).jpeg'
import img4 from '../img/opd (4).jpeg'
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
                 <div className="imgBox">
                            <img src={img3} alt="" />
                            <img src={img2} alt="" />
                            <img src={img1} alt="" />
                            <img src={img4} alt="" />
                        </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PhysiotherapyDepartmnt
