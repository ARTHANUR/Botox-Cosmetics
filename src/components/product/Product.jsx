import React, { useState } from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import "./Product.css";
import autoAnimate from "@formkit/auto-animate";

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
        detail: "Best Conditioner",
        price: "30",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695819/cosmetics/img7_gcnr9h.png",
        type: "conditioner",
    },
    {
        name: "CONDITIONER",
        detail: "Best Conditioner",
        price: "30",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img8_wkigg1.png",
        type: "conditioner",
    },
    {
        name: "CONDITIONER",
        detail: "Best Conditioner",
        price: "30",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img9_bnva98.png",
        type: "conditioner",
    },
    {
        name: "CONDITIONER",
        detail: "Best Conditioner",
        price: "30",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695826/cosmetics/img10_bhd3wx.png",
        type: "conditioner",
    },
    {
        name: "FOUNDATION",
        detail: "Nourish your skin",
        price: "12",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695820/cosmetics/img11_muecax.png",
        type: "foundation",
    },
    {
        name: "FOUNDATION",
        detail: "Nourish your skin",
        price: "12",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695822/cosmetics/img12_pquptp.png",
        type: "foundation",
    },
    {
        name: "FOUNDATION",
        detail: "Nourish your skin",
        price: "12",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695822/cosmetics/img13_amvme1.png",
        type: "foundation",
    },
    {
        name: "FOUNDATION",
        detail: "Nourish your skin",
        price: "12",
        img: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695825/cosmetics/img14_nnbxy0.png",
        type: "foundation",
    },
];

const Product = () => {
    const [parent] = useAutoAnimate()
    const [menuProduct, setMenuProduct] = useState(ProductsData);

    const filter = (type) => {
        setMenuProduct(ProductsData.filter((product) => product.type === type));
    };

    return (
        <>
            <div className="product-head">
                <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695822/cosmetics/plane_twwiva.png" alt="" />
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="product-section">
                <div className="item-left">
                    <ul>
                        <li onClick={() => setMenuProduct(ProductsData)}> All </li>
                        <li onClick={() => filter("skin care")}> Skin Care</li>
                        <li onClick={() => filter("conditioner")}> Conditioner</li>
                        <li onClick={() => filter("foundation")}> Foundation</li>
                    </ul>
                </div>
                <span />
                <div className="item-container" ref={parent}>
                    {menuProduct.map((product) => {
                        return (
                            <>
                                <div className="product-container">
                                    <div className="item-info">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                        <span>$ {product.price}</span>
                                    </div>
                                    <div className="item-img">
                                        <img src={product.img} alt="" />
                                    </div>
                                </div>
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
