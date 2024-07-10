import React from "react";
import RegularButton from "../RegularButton/RegularButton";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="company-description">
        <h2>Virgowears</h2>
        <p>We are the best when it comes to fashion. we get you covered anyday and any time</p>
        <div className="email-cta">
          <div className="email-field">
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="footer-btn">
            <RegularButton name="slim">Submit</RegularButton>
          </div>
        </div>
      </div>
      <div className="more-options">
        <table>
          <thead>
            <th>Products</th>
            <th>Categories</th>
            <th>Social Media</th>
          </thead>
          <tbody>
            <tr>
              <td>T-Shirt</td>
              <td>Men</td>
              <td>Instagram</td>
            </tr>
            <tr>
              <td>Jacket</td>
              <td>Women</td>
              <td>Facebook</td>
            </tr>
            <tr>
              <td>Short</td>
              <td>Kids</td>
              <td>YouTube</td>
            </tr>
            <tr>
              <td>Hat</td>
              <td>Gift</td>
              <td>Twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
