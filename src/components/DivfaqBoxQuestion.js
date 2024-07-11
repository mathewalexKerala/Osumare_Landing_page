// import { useMemo } from "react";
// import PropTypes from "prop-types";
import "./DivfaqBoxQuestion.css";

// const DivfaqBoxQuestion = ({ className = "", propBackgroundColor }) => {
//   const divfaqBoxQuestionStyle = useMemo(() => {
//     return {
//       backgroundColor: propBackgroundColor,
//     };
//   }, [propBackgroundColor]);

//   return (
//     <div
//       className={`divfaq-box-question ${className}`}
//       style={divfaqBoxQuestionStyle}
//     >
//       <div className="how-does-osumare-measure-campa-parent">
//         <div className="how-does-osumare">
//           3. How does Osumare measure campaign success?
//         </div>
//         <div className="ifa-solid">
//           <div className="symbol1"></div>
//         </div>
//       </div>
//       <div className="p1" />
//     </div>
//   );
// };

// DivfaqBoxQuestion.propTypes = {
//   className: PropTypes.string,

//   /** Style props */
//   propBackgroundColor: PropTypes.any,
// };

// export default DivfaqBoxQuestion;

import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './DivfaqBoxQuestion.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DivfaqBoxQuestion({ className = "", propBackgroundColor }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded ? 'panel1' : false);
  };

  const divfaqBoxQuestionStyle = useMemo(() => {
    return {
      backgroundColor: expanded === 'panel1' ? propBackgroundColor : 'transparent',
      color: expanded === 'panel1' ? 'white' : 'black',
    };
  }, [propBackgroundColor, expanded]);

  return (
    <div>
      <Accordion 
        expanded={expanded === 'panel1'} 
        onChange={handleChange} 
        className={`divfaq-box-question ${className}`}
      >
        <AccordionSummary
         style={{width:"100%",...divfaqBoxQuestionStyle}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          3. How does Osumare measure campaign success?
        </AccordionSummary>
        <AccordionDetails>
          We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

DivfaqBoxQuestion.propTypes = {
  className: PropTypes.string,
  propBackgroundColor: PropTypes.any,
};
