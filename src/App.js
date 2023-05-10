import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";
import Slider from "./components/header/Slider";
import Virtual from "./components/virtual/Virtual.jsx"

import "./App.css"


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Virtual />
    </>
  );
}

export default App;
