import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";
import Slider from "./components/header/Slider";
import Virtual from "./components/virtual/Virtual.jsx";
import Product from "./components/product/Product";

import "./App.css";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Slider />
            <Virtual />
            <Product />
            <Testimonial />
            <div className="footer-line"></div>
            <Footer />
        </>
    );
}

export default App;
