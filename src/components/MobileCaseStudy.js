import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./MobileCaseStudy.css";

const MobileCaseStudy = ({ className = "" }) => {
  return (
    <section className={`mobile-case-study ${className}`}>
      <div className="content-wrapper4">
        <div className="your-peace-of-mind-parent">
          <b className="your-peace-of">Your Peace of Mind</b>
          <div className="through-our-conversion-focused-container">
            <p className="through-our-conversion-focused">
              Through our conversion-focused strategies, we ensure that property
              seekers are not just visitors, but engaged prospects ready to make
              their next move in the real estate market
            </p>
          </div>
        </div>
        <div className="mobile-button">
          <Button
            className="m-buttons3"
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
    </section>
  );
};

MobileCaseStudy.propTypes = {
  className: PropTypes.string,
};

export default MobileCaseStudy;
