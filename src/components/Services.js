import { Button } from "@mui/material";
import ServiceCard from "./ServiceCard";
import PropTypes from "prop-types";
import "./Services.css";

const Services = ({ className = "" }) => {
  return (
    <section className={`services ${className}`}>
      <div className="services-section">
        <div className="content-wrapper1">
          <div className="header">
            <b className="our-service-offerings">Our Service Offerings</b>
            <div className="strategies-that-drive">
              {" "}
              Strategies that Drive Property Market Excellence
            </div>
          </div>
          <div className="service-cards">
            <ServiceCard
              group117="/group-117.svg"
              automotiveSEO="Automotive SEO"
              driveYourSuccessWithAutom="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
            />
            <ServiceCard
              group117="/group-117-1.svg"
              automotiveSEO="PPC Precision"
              driveYourSuccessWithAutom="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
            />
            <ServiceCard
              group117="/group-117-2.svg"
              automotiveSEO="Social Acceleration"
              driveYourSuccessWithAutom=" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
            />
            <ServiceCard
              group117="/group-117-3.svg"
              automotiveSEO="Content Excellence"
              driveYourSuccessWithAutom="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
            />
            <ServiceCard
              group117="/group-117-4.svg"
              automotiveSEO="Web Design"
              driveYourSuccessWithAutom="Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
            />
            <ServiceCard
              group117="/group-117-5.svg"
              automotiveSEO="Data-Driven Insights"
              driveYourSuccessWithAutom="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
            />
            <ServiceCard
              group117="/group-117-6.svg"
              automotiveSEO="End-to-End Solutions"
              driveYourSuccessWithAutom="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
            />
            <ServiceCard
              group117="/group-117-7.svg"
              automotiveSEO="Video marketing"
              driveYourSuccessWithAutom="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
            />
          </div>
          <Button
            className="m-buttons1"
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

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
