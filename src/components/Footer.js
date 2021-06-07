import React from "react";

export const Footer = () => {
  return (
    <div className="footer__content">
      <div className="footer__content-column1">
        <div className="footer__content-column1-contenedor">
          <h1>NETWORK WITH US</h1>
          <p>
            We've released new version (v13.0) of our MediCenter #Health
            #Medical #Clinic #WordPress Theme with new #Pregnancy…
            https://t.co/kjtfU01uZf
          </p>
        </div>
      </div>
      <div className="footer__content-column2">
        <div className="footer__content-column2-contenedor">
          <h1>JOIN OUR MAILING LIST</h1>
          <p>
            Get the latest news and updates with the Nostalgia newsletter. Join
            our monthly email newsletter. It's fast and easy.
          </p>
          <div className="row">
            <input type="text" placeholder="Your e-mail" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
