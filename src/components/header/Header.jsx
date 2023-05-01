import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="main">
                <div className="main-left">
                    <h3>
                        SKIN <br />
                        PROTECTION <br />
                        CREAM
                    </h3>
                    <br /><br />
                    <div>
                        <h1> Trendy Collection </h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quae. Amet nesciunt nihil doloribus totam dolorum nobis cumque esse. Quaerat.</p>
                    </div>
                </div>
                <div className="main-center">
                    <div>
                        <img src="./images/hero.png" alt="" />
                    </div>
                </div>
                <div className="main-right">
                    <div>
                        <h1>1.5m</h1>
                        <p>Monthly Traffic</p>
                    </div>
                    <br /><br /><br /><br />
                    <div>
                        <h1>100k</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
