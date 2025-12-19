import React from "react";

const Footergrid = () => {
  return (
    <div className="footergrid">
      <div className="footergrid__item">
        <div className="head">Company</div>
        <ul>
          <li>About Grearn</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Ambassadors</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footergrid__item">
        <div className="head">Products</div>
        <ul>
          <li>Farm Investment Plans</li>
          <li>Grain Trading</li>
          <li>Crop Savings</li>
          <li>Regional Markets</li>
          <li>Grearn API</li>
          <li>Portfolio Management</li>
          <li>Community Circles</li>
          <li>Sustainable Agriculture</li>
          <li>Have a Suggestion?</li>
        </ul>
      </div>
      <div className="footergrid__item">
        <div className="head">Resources</div>
        <ul>
          <li>Success Stories</li>
          <li>Media Coverage</li>
          <li>FAQs</li>
          <li>Security & Trust</li>
          <li>Calculate Your Returns</li>
          <li>Investment Guides</li>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="footergrid__item">
        <div className="head">Contact</div>
        <ul>
          <li>support@grearn.com</li>
          <li>WhatsApp ↗</li>
        </ul>
      </div>
    </div>
  );
}

export default Footergrid;
