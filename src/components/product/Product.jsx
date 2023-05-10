import React from "react";
import "./Product.css";

const Product = () => {
    const ProductsData = [
        {
            name: "SKIN",
            detail: "Super Skin Care",
            price: "25",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695827/cosmetics/img1_ilui1t.png",
            type: "skin care",
        },
        {
            name: "SKIN",
            detail: "Hydrating serum",
            price: "30",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695819/cosmetics/img2_f8lr8u.png",
            type: "skin care",
        },
        {
            name: "NATURE",
            detail: "Super Skin Care",
            price: "25",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img3_zx8vf7.png",
            type: "skin care",
        },
        {
            name: "Foundation",
            detail: "Super Skin Care",
            price: "25",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695819/cosmetics/img4_yznyfi.png",
            type: "foundation",
        },
        {
            name: "CONDITIONER",
            detail: "Super Skin Care",
            price: "30",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img5_nfgj7l.png",
            type: "conditioner",
        },
        {
            name: "NATURE",
            detail: "Super Skin Care",
            price: "25",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695819/cosmetics/img6_z1w8ip.png",
            type: "skin care",
        },
        {
            name: "CONDITIONER",
            details: "Best Conditioner",
            price: "30",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695819/cosmetics/img7_gcnr9h.png",
            type: "conditioner",
        },
        {
            name: "CONDITIONER",
            details: "Best Conditioner",
            price: "30",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img8_wkigg1.png",
            type: "conditioner",
        },
        {
            name: "CONDITIONER",
            details: "Best Conditioner",
            price: "30",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img9_bnva98.png",
            type: "conditioner",
        },
        {
            name: "CONDITIONER",
            details: "Best Conditioner",
            price: "30",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695826/cosmetics/img10_bhd3wx.png",
            type: "conditioner",
        },
        {
            name: "FOUNDATION",
            details: "Nourish your skin",
            price: "12",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img11_muecax.png",
            type: "foundation",
        },
        {
            name: "FOUNDATION",
            details: "Nourish your skin",
            price: "12",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695822/cosmetics/img12_pquptp.png",
            type: "foundation",
        },
        {
            name: "FOUNDATION",
            details: "Nourish your skin",
            price: "12",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695822/cosmetics/img13_amvme1.png",
            type: "foundation",
        },
        {
            name: "FOUNDATION",
            details: "Nourish your skin",
            price: "12",
            img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695825/cosmetics/img14_nnbxy0.png",
            type: "foundation",
        },
    ];
    return (
        <>
            <div className="product-head">
                <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695822/cosmetics/plane_twwiva.png" alt="" />
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="product-section">
                <div className="item-left">
                    <ul>
                        <li> All </li>
                        <li> Skin Care</li>
                        <li> Conditioner</li>
                        <li> Foundation</li>
                    </ul>
                </div>
                <span />
                <div className="item-container">
                    {ProductsData.map((product) => {
                        return (
                            <>
                                <div className="product-container"></div>
                            </>
                        );
                    })}
                </div>
                <span />
            </div>
        </>
    );
};

export default Product;
