import React from "react";
import "./Testimonial.css";

const Slide = ({ data }) => {
    return (
        <>
            {data.map((item) => {
                return (
                    <>
                        <div className="slide">
                            <img src={item.image} alt="profile" className="profile" />
                            <span>
                                <h1>{item.name}</h1>
                                <p> {item.comment} </p>
                            </span>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Slide;
