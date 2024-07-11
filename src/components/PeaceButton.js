import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./PeaceButton.css";

const PeaceButton = ({ className = "" }) => {
  return (
    <section className={`peace-button ${className}`}>
      <div className="mastery-wrapper">
        <div className="mastery-heading-wrapper">
          <b className="real-estate-focused-digital">
            Real Estate-Focused Digital Mastery
          </b>
        </div>
        <div className="frame-parent">
          <div className="directing-the-arrow-upcuate-wrapper">
            <img
              className="directing-the-arrow-upcuate-icon"
              loading="lazy"
              alt=""
              src="/directingthearrowupcuate.svg"
            />
          </div>
          <div className="mastery-content-wrapper">
            <div className="mastery-content">
              <b className="unlock-the-potential">
                Unlock the Potential of Digital Real Estate Excellence
              </b>
              <div className="at-osumare-we">
                At Osumare, we understand that the real estate landscape demands
                a digital presence that aligns with the intricacies of property
                marketing. Our range of specialized services is meticulously
                designed to catapult your brand's success in the ever-evolving
                digital property market.
              </div>
            </div>
            <Button
              className="m-buttons"
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
    </section>
  );
};

PeaceButton.propTypes = {
  className: PropTypes.string,
};

export default PeaceButton;
