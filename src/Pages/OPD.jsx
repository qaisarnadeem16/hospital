import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import img from '../img/imgg (2).jpeg'
import img2 from '../img/imgg (3).jpeg'
const OPD = () => {
    return (
        <div className='main1'>
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
                        <img src={img2} alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default OPD
