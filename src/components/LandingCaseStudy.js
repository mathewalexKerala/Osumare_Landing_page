import PropTypes from "prop-types";
import "./LandingCaseStudy.css";

const LandingCaseStudy = ({ className = "" }) => {
  return (
    <section className={`landing-case-study ${className}`}>
      <div className="content-wrapper3">
        <div className="landing-top">
          <div className="expertise-icons1">
            <div className="icon3">
              <div className="icon-container1">
                <div className="background1" />
                <img
                  className="d-model-9040866-3-icon"
                  loading="lazy"
                  alt=""
                  src="/3dmodel-9040866-3@2x.png"
                />
              </div>
            </div>
            <div className="icon4">
              <div className="ellipse-group">
                <div className="frame-item" />
                <img
                  className="medal-2439078-1-1"
                  alt=""
                  src="/medal-2439078-1-1@2x.png"
                />
                <img
                  className="medal-2439078-1-icon"
                  loading="lazy"
                  alt=""
                  src="/medal-2439078-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="expertise-example1">
          <div className="social-content">
            <b className="trust-building-with">
              Trust Building with Social Proof
            </b>
            <div className="discover-how-leveraging">
              Discover how leveraging client testimonials boosted buyer
              confidence, leading to higher conversion rates for a property
              development project
            </div>
          </div>
          <div className="social-content1">
            <b className="mobile-first-success">Mobile-First Success:</b>
            <div className="learn-how-our">
              {" "}
              Learn how our mobile-responsive design approach resulted in a 25%
              increase in inquiries from mobile users for a real estate agency.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LandingCaseStudy.propTypes = {
  className: PropTypes.string,
};

export default LandingCaseStudy;
