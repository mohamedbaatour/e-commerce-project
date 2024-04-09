import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="description-nav-box fade"> Reviews (122)</div>
        <div className="descriptionbox-description">
          <p>
            An e-commerce website is an online platform where businesses or
            individuals sell products or services over the internet. These
            websites facilitate transactions between buyers and sellers,
            allowing consumers to browse, select, and purchase items from a wide
            range of categories without the need to visit physical stores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
