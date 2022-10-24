import React from "react";
import "./Footer.css";
import FootLinks from "./FootLinks/FootLinks";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        To access and use all the features of Apple Card, you must add Apple
        Card to Wallet on an iPhone or iPad with the latest version of iOS or
        iPadOS. Update to the latest version by <br /> going to Settings >
        General > Software Update. Tap Download and Install.
      </p>
      <p>Available for qualifying applicants in the United States.</p>

      <p>
        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
      </p>
      <p>
        Learn more about how Apple Card applications are evaluated at
        support.apple.com/kb/HT209218.
      </p>

      <hr />
      <FootLinks />
    </div>
  );
};

export default Footer;
