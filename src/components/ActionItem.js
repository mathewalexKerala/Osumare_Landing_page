import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ActionItem.css";

const ActionItem = ({
  className = "",
  virtual105695042,
  callToActionOptimization,
  ourCarefullyCraftedCTAsGu,
  propPadding,
}) => {
  const actionItemStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`action-item ${className}`} style={actionItemStyle}>
      <div className="action-icons">
        <div className="icon">
          <div className="icon-circle">
            <div className="shape" />
            <img
              className="virtual-10569504-2-icon"
              loading="lazy"
              alt=""
              src={virtual105695042}
            />
          </div>
        </div>
      </div>
      <div className="action-description">
        <b className="call-to-action-optimization">
          {callToActionOptimization}
        </b>
        <div className="our-carefully-crafted">{ourCarefullyCraftedCTAsGu}</div>
      </div>
    </div>
  );
};

ActionItem.propTypes = {
  className: PropTypes.string,
  virtual105695042: PropTypes.string,
  callToActionOptimization: PropTypes.string,
  ourCarefullyCraftedCTAsGu: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ActionItem;
