import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img1 from '../img/opd (1).jpg'
import img2 from '../img/opd (2).jpg'
import img3 from '../img/opd (3).jpg'
import img4 from '../img/opd (4).jpg'
const OPD = () => {
    return (
        <>
            <div className='main1 '>
                <Navbar />
                <div className="opd">
                    <div className="heading1">
                        <span>Services Includes in</span>
                        <span >OPD</span>
                    </div>

                    <div className="leftSide1">
                        <div className="">
                            <h5>The OPD is a crucial component of a hospital's services, and it serves patients who do not require admission or overnight stay in the hospital. Instead, they visit the hospital for medical consultations, diagnostic tests, treatment, and follow-up appointments.</h5>
                            <ul>
                                <li>Consultation Rooms</li>
                                <li>Nursing Stations</li>
                                <li>Waiting Area</li>
                                <li>Registration/Reception Desk </li>
                                <li>Pharmacy </li>
                                <li>Diagnostic Services </li>
                                <li>Diagnostic Services </li>
                                <li>Medical Records Section </li>
                                <li>Specialty Clinics </li>
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

        </>

    )
}

export default OPD
