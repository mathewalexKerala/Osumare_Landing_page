import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FormSection.css";

const FormSection = ({ className = "" }) => {
  return (
    <section className={`form-section ${className}`}>
      <div className="form-section-child" />
      <div className="form-section-item" />
      <div className="form-heading">
        <div className="connect-with-our-digital-marke-parent">
          <div className="connect-with-our">
            Connect with Our Digital Marketing Experts
          </div>
          <div className="reach-out-for">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </div>
        </div>
      </div>
      <div className="form">
        <form className="fields-container">
          <div className="fields-wrapper">
            <div className="input-fields">
              <div className="name-parent">
                <div className="name">Name</div>
                <TextField
                  className="inputs"
                  placeholder="Enter your name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#c7c7c7" },
                    "& .MuiInputBase-root": {
                      height: "44px",
                      backgroundColor: "#fcfcfc",
                    },
                    "& .MuiInputBase-input": { color: "#a9b1bb" },
                  }}
                />
              </div>
              <div className="phone-parent">
                <div className="phone">Phone</div>
                <TextField
                  className="frame-inner"
                  placeholder="Enter your Number"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#c7c7c7" },
                    "& .MuiInputBase-root": {
                      height: "44px",
                      backgroundColor: "#fcfcfc",
                    },
                    "& .MuiInputBase-input": { color: "#a9b1bb" },
                  }}
                />
              </div>
              <div className="email-parent">
                <div className="email">Email</div>
                <TextField
                  className="frame-textfield"
                  placeholder="Enter your Total No of Vehicles:"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#c7c7c7" },
                    "& .MuiInputBase-root": {
                      height: "44px",
                      backgroundColor: "#fcfcfc",
                    },
                    "& .MuiInputBase-input": { color: "#a9b1bb" },
                  }}
                />
              </div>
            </div>
            <div className="message-field">
              <div className="message-wrapper">
                <div className="message">Message</div>
                {/* <div className="message-input"> */}
                  <textarea rows="7" 
                  cols="50" 
                  name="comment" className="enter-your-message message-input">Enter your Message.</textarea>
                {/* </div> */}
              </div>
            </div>
          </div>
          <Button
            className="large-button1"
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
        </form>
      </div>
    </section>
  );
};

FormSection.propTypes = {
  className: PropTypes.string,
};

export default FormSection;
