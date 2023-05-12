import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="col1">
                <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695823/cosmetics/logo_rs23sd.png" alt="" />
                <span>BOTOX</span>
            </div>
            <div className="col2">
                <h1 className="f-head">Contact Us</h1>
                <ul className="f-list">
                    <li className="list-item">111 north avenue Orlando, FL 32801 </li>
                    <li className="list-item">352-306-4415 </li>
                    <li className="list-item">sarthanur@gmail.com </li>
                </ul>
            </div>
            <div className="col3">
                <h1 className="f-head">Account</h1>
                <ul className="f-list">
                    <li className="list-item">Sign in </li>
                    <li className="list-item"> Log in</li>
                </ul>
            </div>
            </div>
            <div className="copyright">
                <p>Copyright ©2023 by br ARTHANUR, Inc <br /> All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
