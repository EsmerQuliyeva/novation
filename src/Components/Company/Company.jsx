import React from "react";
import secondCompany from "../../../src/assets/company-logo/Shopify logo (1).png";
import thirdCompany from "../../../src/assets/company-logo/Cloudflare logo.png";
import fourthCompany from "../../../src/assets/company-logo/google-light.svg fill.png";
import fifthCompany from "../../../src/assets/company-logo/Egghead logo.png";
import "./Company.css";
const Company = () => {
  return (
    <div className="company-container">
      <h4>Tərəfdaşlar</h4>
      <div className="company-list">
        <img src={thirdCompany} alt="company" className="company-logo" />
        <img src={fourthCompany} alt="company" className="company-logo" />
        <img src={secondCompany} alt="company" className="company-logo" />
        <img src={thirdCompany} alt="company" className="company-logo" />
        <img src={fourthCompany} alt="company" className="company-logo" />
        <img src={fifthCompany} alt="company" className="company-logo" />
      </div>
    </div>
  );
};

export default Company;
