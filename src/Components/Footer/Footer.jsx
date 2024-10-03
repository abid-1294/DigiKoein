import React from "react";
import "./Footer.css";
import LogoIMG from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="footerPart"  id="contact">
      <div className="container">
        <div className="footerContent">

          <div className="companyIntro">
            <div className="logo">
              <img src={LogoIMG} alt="" />
              <h2>DIGI KOEIN</h2>
            </div>
            <p>
              DIGI KOEIN is embarking on a groundbreaking initiative to revolutionize the remittance and payment services sector by harnessing the power of blockchain technology.
            </p>
            <h4>DIGIKOEIN 2023 &copy;</h4>
          </div>

          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Trademarks</a>
              </li>
            </ul>
          </div>

          <div className="sitemap">
            <h3>Sitemap</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">What is Digikoein?</a>
              </li>
              <li>
                <a href="#">What is DLT for Future Bank</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="about">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Litepaper</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
