import DivfaqBoxQuestion from "./DivfaqBoxQuestion";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`faq-container-parent ${className}`}>
      <div className="faq-container">
        <b className="frequently-asked-questions">Frequently Asked Questions</b>
        <div className="pinpoint-your-audience">
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </div>
      </div>
      <div className="faq">
        
        <div className="divfaq-box">
          <DivfaqBoxQuestion  propBackgroundColor="#0078ff" />
        </div>
        <div className="divfaq-box">
          <DivfaqBoxQuestion propBackgroundColor="#0078ff" />
          
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
