import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ExpertiseItem.css";

const ExpertiseItem = ({ className = "" }) => {
  return (
    <section className={`expertise-item ${className}`}>
      <div className="content-wrapper">
        <div className="expertise-content">
          <div className="expertise-items">
            <h1 className="elevate-real-estate-container">
              <span className="elevate">{`Elevate `}</span>
              <b className="real-estate-success">Real Estate Success</b>
              <span className="with-osumares-digital">
                {" "}
                with Osumare's Digital Expertise
              </span>
            </h1>
            <div className="tailored-solutions-for">
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              className="large-button"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#0078ff",
                borderRadius: "32px",
                "&:hover": { background: "#0078ff" },
                width: 408,
                height: 56,
              }}
            >
              Get started
            </Button>
          </div>
        </div>
        <div className="header-image-wrapper">
          <div className="header-image">
            <img
              className="background-complete-1-icon"
              alt=""
              src="/backgroundcomplete-1@2x.png"
            />
            <img
              className="for-salebro-icon"
              loading="lazy"
              alt=""
              src="/forsalebro.svg"
            />
            <div className="we-need">{`We Need `}</div>
            <div className="marketing">Marketing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExpertiseItem.propTypes = {
  className: PropTypes.string,
};

export default ExpertiseItem;
