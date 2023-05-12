import React from "react";
import "./Testimonial.css";
import Slide from "./Slide";
import { motion } from "framer-motion";

const TestimonialsData = [
    {
        image: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897134/cosmetics/pexels-arianna-jad%C3%A9-4754648_oixcld.jpg",
        comment: " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Juliet Watson",
    },
    {
        image: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897233/cosmetics/pexels-nichole-sebastian-3220360_t6cky3.jpg",
        comment: " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Gamora",
    },
    {
        image: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897134/cosmetics/pexels-sadiq-padela-3748399_ddkdor.jpg",
        comment: " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Alexa Revera",
    },
    {
        image: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897267/cosmetics/pexels-jonaorle-3828268_ctpqw3.jpg",
        comment: " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Alex Hormonzi",
    },
    {
        image: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897130/cosmetics/pexels-polina-tankilevitch-4728655_hfrcgd.jpg",
        comment: " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Natasha",
    },
    {
        image: "https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897134/cosmetics/pexels-sadiq-padela-3748399_ddkdor.jpg",
        comment: " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Alex Hormonzi",
    },
];

const Testimonial = () => {
    return (
        <>
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="testimonial-img"
                src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683695827/cosmetics/testimonialHero_gaqdjb.png"
                alt="profile"
            />
            <h1 className="testimonial-header">REVIEWS</h1>
            <div className="testimonial-slider">
                <Slide data={TestimonialsData} />
            </div>
        </>
    );
};

export default Testimonial;
