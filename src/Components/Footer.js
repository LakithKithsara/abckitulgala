import React from 'react'
import img1 from "../images/logo.png"
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-sm-6">    
                            <img src={img1} alt="logo"></img>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Main Pages</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></li>
                                <li><Link to="/rooms/" style={{textDecoration:'none',color:'white'}}>Rooms</Link></li>
                                <li><Link to="/activities" style={{textDecoration:'none',color:'white'}}>Activities</Link></li>
                                <li><Link to="/aboutUs" style={{textDecoration:'none',color:'white'}}>About Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Policy</h4>
                            <ul className="list-unstyled">
                                <li>Terms of Usage</li>
                                <li>Privacy Policy</li>
                                <li>Return Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us On</h4>
                            <ul className="list-unstyled">
                                <li>info@abckitulgala.com</li>
                                <li>+94 77 306 9903 , +94 77 603 7136</li>
                                <li>Kitulgala , Sri Lanka</li>
                            </ul>
                        </div>
                    </div>    
                    <hr className="new1"></hr>
                {/* <div className="underline"></div> */}
                <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} React App - All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;