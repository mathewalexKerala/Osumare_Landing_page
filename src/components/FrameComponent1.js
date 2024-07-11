import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`content-wrapper-wrapper ${className}`}>
      <div className="content-wrapper2">
        <div className="content-wrapper-inner">
          <div className="expertise-title-wrapper-parent">
            <div className="expertise-title-wrapper">
              <div className="our-expertise-in">Our Expertise in Action</div>
            </div>
            <div className="expertise-icons">
              <div className="icon1">
                <div className="icon-container">
                  <div className="background" />
                  <img
                    className="weather-534564-2-icon"
                    loading="lazy"
                    alt=""
                    src="/weather-534564-2@2x.png"
                  />
                </div>
              </div>
              <div className="icon2">
                <div className="ellipse-parent">
                  <div className="frame-child" />
                  <img
                    className="mass-9984040-2-icon"
                    loading="lazy"
                    alt=""
                    src="/mass-9984040-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="expertise-example">
          <div className="cta-content">
            <b className="effective-ctas">Effective CTAs</b>
            <div className="see-how-our">
              {" "}
              See how our strategic CTAs drove a significant increase in
              property inquiries and accelerated sales for a real estate agency.
            </div>
          </div>
          <div className="cta-content1">
            <b className="conversion-optimized-landing-p">
              Conversion-Optimized Landing Pages
            </b>
            <div className="explore-a-case">
              Explore a case study where our landing page optimization increased
              property lead conversion rates by 30%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
