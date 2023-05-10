import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="nav-left">
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695823/cosmetics/logo_rs23sd.png" alt="" />
                    <h1>Botox</h1>
                </div>
                <ul>
                    <li>
                        <input type="text" placeholder="search" />
                    </li>
                    <li> ENG </li>
                    <li> Sales </li>
                    <li> New </li>
                    <li> Brands </li>
                    <li> Collections </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
