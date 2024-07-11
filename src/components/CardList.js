import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({
  className = "",
  group116,
  marketTrendsAnalysis,
  predictiveInsightsToGuide,
  propPadding,
}) => {
  const cardListStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`card-list ${className}`} style={cardListStyle}>
      <img className="card-list-child" loading="lazy" alt="" src={group116} />
      <div className="trend-card-content">
        <div className="market-trends-analysis">{marketTrendsAnalysis}</div>
        <div className="predictive-insights-to">
          {predictiveInsightsToGuide}
        </div>
      </div>
    </div>
  );
};

CardList.propTypes = {
  className: PropTypes.string,
  group116: PropTypes.string,
  marketTrendsAnalysis: PropTypes.string,
  predictiveInsightsToGuide: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default CardList;
