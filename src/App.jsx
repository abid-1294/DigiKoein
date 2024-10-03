import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import WeDo from "./Components/WeDo/WeDo";
import Digikoein from "./Components/Digikoein/Digikoein";
import Footer from "./Components/Footer/Footer";
import Offer from "./Components/Offer/Offer";

function App() {
  return (
    <>
      <div id="home" className="home">
        <Home />
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <WeDo />
      <Digikoein />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
