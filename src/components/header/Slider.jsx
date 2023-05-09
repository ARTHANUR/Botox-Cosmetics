import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/react";
import "./Slider.css";

// import { SliderProducts } from "../../data/products";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
    const SliderProducts = [
        {
            name: "SKIN",
            detail: "Super Skin Care",
            price: "25",
            img: "./images/img1.png",
        },
        {
            name: "SKIN",
            detail: "Super Skin Care",
            price: "30",
            img: "./images/img2.png",
        },
        {
            name: "NATURE",
            detail: "Super Skin Care",
            price: "25",
            img: "./images/img3.png",
        },
        {
            name: "Lips",
            detail: "Lip Care",
            price: "69",
            img: "./images/Lipstick.png",
        },
    ];

    return (
        <>
            <div className="s-container">
                <Swiper slidesPerView={2} spaceBetween={40} slidesPerGroup={1} loop={true}>
                    {SliderProducts.map((slide, i) => {
                        return (
                            <SwiperSlide>
                              <div className="slide">
                              <div className="left">
                                    <span>

                                        <h2> {slide.name} </h2>
                                        <p>{slide.detail}</p>
                                    </span>
                                    <h1>$ {slide.price} </h1>
                                    <button>Shop Now</button>
                                </div>

                                <div className="right">
                                    <img src={slide.img} alt="" />
                                </div>
                              </div>
                                
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default Slider;
