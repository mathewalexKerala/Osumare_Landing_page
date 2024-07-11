import PropTypes from "prop-types";
import "./ServiceCard.css";

const ServiceCard = ({
  className = "",
  group117,
  automotiveSEO,
  driveYourSuccessWithAutom,
}) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="card-row">
        <img className="card-row-child" loading="lazy" alt="" src={group117} />
        <b className="automotive-seo">{automotiveSEO}</b>
      </div>
      <div className="drive-your-success">{driveYourSuccessWithAutom}</div>
    </div>
  );
};

ServiceCard.propTypes = {
  className: PropTypes.string,
  group117: PropTypes.string,
  automotiveSEO: PropTypes.string,
  driveYourSuccessWithAutom: PropTypes.string,
};

export default ServiceCard;
