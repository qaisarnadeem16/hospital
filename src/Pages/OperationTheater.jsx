import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import img2 from '../img/imgg (5).jpeg'
const OperationTheater = () => {
    return (
        <div className='main1'>
            <Navbar />
            <div className="opd">
                <div className="heading1">
                    <span>Services Includes in</span>
                    <span >Operation Theater</span>
                </div>

                <div className="leftSide1">
                    <div className="">
                        <h5>Operating Room (OR), is a specialized and controlled environment within a hospital or medical facility where surgical procedures are performed by a surgical team. It is a critical area designed to provide a sterile and safe environment for surgeries and other invasive medical procedures.</h5>
                        <ul>
                            <li>Sterile Environment</li>
                            <li>Air Filtration  </li>
                            <li>Surgical Equipment</li>
                            <li>Operating Table </li>
                            <li>Surgical Lights </li>
                            <li>Scrub Area </li>
                            <li>Emergency Equipment </li>
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

export default OperationTheater
