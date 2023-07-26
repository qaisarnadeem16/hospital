import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img2 from '../img/pt (1).jpg'
import img1 from '../img/pt (2).jpg'
import img3 from '../img/pt (3).jpg'
import img4 from '../img/pt (4).jpg'
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
