import React, { lazy, Suspense } from 'react';
import { Button } from "@mui/material";
import "./RealEstate.css";

const ExpertiseItem = lazy(() => import("../components/ExpertiseItem"));
const PeaceButton = lazy(() => import("../components/PeaceButton"));
const Services = lazy(() => import("../components/Services"));
const FrameComponent3 = lazy(() => import("../components/FrameComponent3"));
const FrameComponent2 = lazy(() => import("../components/FrameComponent2"));
const FrameComponent1 = lazy(() => import("../components/FrameComponent1"));
const LandingCaseStudy = lazy(() => import("../components/LandingCaseStudy"));
const MobileCaseStudy = lazy(() => import("../components/MobileCaseStudy"));
const TestimonialCarousel = lazy(() => import("../components/TestimonialCarousel"));
const FrameComponent = lazy(() => import("../components/FrameComponent"));
const FormSection = lazy(() => import("../components/FormSection"));
const Footer = lazy(() => import("../components/Footer"));

const RealEstate = () => {
  return (
    <div className="real-estate">
      <div className="work-card">
        <img
          className="whatsapp-image-2023-06-08-at-9"
          alt=""
          src="/whatsapp-image-20230608-at-952-2@2x.png"
        />
        <img className="rathi-1-icon" alt="" src="/rathi-1@2x.png" />
        <img className="savex-1-icon" alt="" src="/savex-1@2x.png" />
        <img className="gq-1-1" alt="" src="/gq-1-1@2x.png" />
        <img className="rathi-1-1" alt="" src="/rathi-1-1@2x.png" />
        <img className="rathi-2-icon" alt="" src="/rathi-2@2x.png" />
        <img className="wegile-1-icon" alt="" src="/wegile-1@2x.png" />
        <img className="leeway-icon" alt="" src="/leeway@2x.png" />
        <img className="tabish-11-2-1" alt="" src="/tabish-11-2-1@2x.png" />
        <img className="leeway-02-icon" alt="" src="/leeway-02@2x.png" />
        <img className="savex-1-1" alt="" src="/savex-1-1@2x.png" />
        <img className="neemans-2-1" alt="" src="/neemans-2-1@2x.png" />
        <img className="neemans-1-icon" alt="" src="/neemans-1@2x.png" />
        <img
          className="whatsapp-image-2023-06-08-at-91"
          alt=""
          src="/whatsapp-image-20230608-at-955-2@2x.png"
        />
        <div className="whatsapp-image-2023-06-08-at-92" />
        <div className="e-text-continer" />
        <img
          className="whatsapp-image-2023-06-08-at-93"
          alt=""
          src="/whatsapp-image-20230608-at-955-1@2x.png"
        />
        <img
          className="bc9692154166107-1-icon"
          alt=""
          src="/bc9692154166107-1@2x.png"
        />
      </div>
      <section className="nav-wrapper">
        <header className="nav">
          <img
            className="osumare-logo-01-2-4"
            loading="lazy"
            alt=""
            src="/osumare-logo01-2-4@2x.png"
          />
          <div className="secondary-button-container">
            <Button
              className="secondary-button"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000c1a",
                fontSize: "16",
                borderColor: "#000c1a",
                borderRadius: "32px",
                "&:hover": { borderColor: "#000c1a" },
                height: 44,
              }}
            >
              Contact us
            </Button>
          </div>
        </header>
      </section>
      <ExpertiseItem />
      <PeaceButton />
      <Services />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="itinraires" />
      <LandingCaseStudy />
      <MobileCaseStudy />
      <section className="testimonial-content-wrapper">
        <div className="testimonial-content">
          <div className="testimonial-header">
            <div className="header-container">
              <b className="what-our-pharma">What Our Pharma Partners Say</b>
              <div className="driving-transformations-one">
                Driving Transformations, One Brand at a Time
              </div>
            </div>
          </div>
          <TestimonialCarousel />
          <FrameComponent />
        </div>
      </section>
      <FormSection />
      <div className="decorator" />
      <div className="real-estate-child" />
      <Footer />
    </div>
  );
};

export default RealEstate;
