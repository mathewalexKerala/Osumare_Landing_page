import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <div className="action-options">
        <div className="footer-wrapper">
          <div className="footer-wrapper-child" />
          <div className="footer-information">
            <div className="company-details">
              <div className="osamare-white-logo">
                <img
                  className="osumare-logo-01-2-3"
                  loading="lazy"
                  alt=""
                  src="/osumare-logo01-2-3@2x.png"
                />
              </div>
              <div className="the-best-digital">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </div>
            </div>
            <div className="address-parent">
              <a className="address">Address</a>
              <div className="survey-no-43">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </div>
            </div>
            <div className="contact-container">
              <b className="contacts">Contacts</b>
              <div className="conatct-info">
                <div className="contact-details">
                  <img
                    className="mail-fill-icon"
                    loading="lazy"
                    alt=""
                    src="/mailfill.svg"
                  />
                  <a
                    className="helloosumarein"
                    href="mailto:%68ello@osum%61re%2Ein"
                    target="_blank"
                  >
                    hello@osumare.in
                  </a>
                </div>
                <div className="contact-details1">
                  <img
                    className="phone-fill-icon"
                    alt=""
                    src="/phonefill.svg"
                  />
                  <div className="div">+91 8459 8762 26</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-menu">
            <b className="menu">Menu</b>
            <div className="menu-items">
              <div className="home">Home</div>
              <a className="about">About</a>
              <a className="services1">Services</a>
              <div className="work">Work</div>
              <div className="blog">Blog</div>
              <div className="career">Career</div>
            </div>
          </div>
          <div className="social-links">
            <b className="social">Social</b>
            <div className="icons">
              <div className="pinterest-icons">
                <img
                  className="pinterest-fill-icon"
                  loading="lazy"
                  alt=""
                  src="/pinterestfill.svg"
                />
                <img
                  className="pinterest-fill-icon1"
                  loading="lazy"
                  alt=""
                  src="/pinterestfill-1.svg"
                />
              </div>
              <img
                className="pinterest-fill-icon2"
                loading="lazy"
                alt=""
                src="/pinterestfill-2.svg"
              />
              <img
                className="pinterest-fill-icon3"
                loading="lazy"
                alt=""
                src="/pinterestfill-3.svg"
              />
              <img
                className="whatsapp-fill-icon"
                loading="lazy"
                alt=""
                src="/whatsappfill.svg"
              />
              <img
                className="whatsapp-fill-icon1"
                loading="lazy"
                alt=""
                src="/whatsappfill-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="expertise-items1">
          <div className="osumare-all-rights">
            © 2023 Osumare. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
