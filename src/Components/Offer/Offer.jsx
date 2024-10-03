import React, { useState } from "react";
import OfferData from "../../data/offerData";
import { LuArrowDownRight } from "react-icons/lu";
import "./Offer.css";

const Offer = () => {
  const [activeOffer, setActiveOffer] = useState(OfferData[0]);

  const handleOfferClick = (offer) => {
    
    const activeItem = document.querySelector(".offerContentActiveItem");
    activeItem.classList.remove("active");

    setTimeout(() => {
      setActiveOffer(offer);
      activeItem.classList.add("active");
    }, 10);
  };

  return (
    <div className="offerBody"  id="offer">
      <div className="container">
        <h1>What do we Offer</h1>

        <div className="offerContent">
          <div className="offerContentActiveItem active">
            <img src={activeOffer.image} alt={activeOffer.title} />
            <h3>{activeOffer.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: activeOffer.description }} />
          </div>

          {OfferData.filter((offer) => offer !== activeOffer).map((offer, index) => (
            <div className="offerContentItem" key={index}>
              <img src={offer.image} alt={offer.title} />
              <h3>{offer.title}</h3>
              <button
                className="downAngularArrow"
                onClick={() => handleOfferClick(offer)}
              >
                <LuArrowDownRight className="arrowicon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
