import { Button } from "@mui/material";
import ActionItem from "./ActionItem";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`conversion-features-wrapper ${className}`}>
      <div className="conversion-features">
        <div className="conversion-image">
          <div className="footer-container">
            <b className="driving-property-inquiries">
              {" "}
              Driving Property Inquiries to Conversions
            </b>
            <div className="streamlined-strategies-for">
              Streamlined Strategies for Real Estate Success
            </div>
          </div>
        </div>
        <div className="image-wrapper-wrapper">
          <div className="image-wrapper">
            <img
              className="house-searchingbro-icon"
              loading="lazy"
              alt=""
              src="/housesearchingbro.svg"
            />
            <div className="action-description1">
              <div className="optimized-path-to-property-pur-parent">
                <b className="optimized-path-to">
                  Optimized Path to Property Purchase
                </b>
                <div className="in-the-dynamic">
                  In the dynamic realm of real estate, the journey from a
                  property inquiry to a successful conversion demands a
                  well-crafted approach. At Osumare, we specialize in guiding
                  potential buyers through this journey seamlessly, maximizing
                  inquiries-turned-conversions with expert strategies.
                </div>
              </div>
              <Button
                className="m-buttons2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#0078ff",
                  borderRadius: "32px",
                  "&:hover": { background: "#0078ff" },
                  width: 233,
                  height: 61,
                }}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
        <b className="driving-property-inquiries1">
          Driving Property Inquiries to Conversions
        </b>
        <div className="action-category">
          <ActionItem
            virtual105695042="/virtual-10569504-2@2x.png"
            callToActionOptimization="Call-to-Action Optimization"
            ourCarefullyCraftedCTAsGu="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
          />
          <ActionItem
            virtual105695042="/onlinestore-3929777-2@2x.png"
            callToActionOptimization="Landing Page Efficiency"
            ourCarefullyCraftedCTAsGu="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
            propPadding="36px 0px"
          />
        </div>
        <div className="action-category1">
          <ActionItem
            virtual105695042="/3d-9345318-2@2x.png"
            callToActionOptimization="Social Proof Utilization"
            ourCarefullyCraftedCTAsGu="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
            propPadding="36px 0px"
          />
          <ActionItem
            virtual105695042="/augmentedreality-7065057-2@2x.png"
            callToActionOptimization="Mobile-Friendly Experience"
            ourCarefullyCraftedCTAsGu="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
            propPadding="unset"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
