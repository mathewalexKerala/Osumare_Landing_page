import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TestimonialCarousel.css";

const testimonials = [
  {
    videoIcon: "/video.svg",
    avatar: "/avatar-of-team@2x.png",
    name: "Tabish Khan",
    message: "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.",
    videoSrc: "/852421-hd_1920_1080_30fps.mp4" 
  },
  {
    videoIcon: "/video.svg",
    avatar: "/avatar-of-team@2x.png",
    name: "John Doe",
    message: "Great service, really helped our business grow.",
    videoSrc: "/4167404-uhd_2160_2880_24fps.mp4"
  },
  {
    videoIcon: "/video.svg",
    avatar: "/avatar-of-team@2x.png",
    name: "Jane Smith",
    message: "Professional and reliable, highly recommend.",
    videoSrc: "/7989667-hd_1080_1920_25fps.mp4"
  },
  {
    videoIcon: "/video.svg",
    avatar: "/avatar-of-team@2x.png",
    name: "Alice Johnson",
    message: "Exceptional results and excellent communication.",
    videoSrc: "/7989682-hd_1920_1080_25fps.mp4"
  },
];

const TestimonialCarousel = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsVideoPlaying(false); // Stop video when navigating
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsVideoPlaying(false); // Stop video when navigating
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`testimonial-carousel ${className}`}>
      <div className="carousel-content">
        <div className="testimonial-card">
          <div className="card-top">
            {!isVideoPlaying ? (
              <img
                className="video-icon"
                loading="lazy"
                alt="Play video"
                src={currentTestimonial.videoIcon}
                onClick={handleVideoClick}
              />
            ) : (
              <video
                className="video-icon"
                controls
                autoPlay
                onEnded={handleVideoEnd}
                onPause={handleVideoPause}
                src={currentTestimonial.videoSrc}
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="testimonial-name">
              <div className="name-container">
                <div className="divall-testimonials-box-nam">
                  <img
                    className="avatar-of-team"
                    loading="lazy"
                    alt="Avatar"
                    src={currentTestimonial.avatar}
                  />
                  <div className="span">
                    <b className="heading-4">{currentTestimonial.name}</b>
                  </div>
                </div>
                <h1 className="symbol">"</h1>
              </div>
              <div className="p">
                <div className="osumares-expertise-in">
                  {currentTestimonial.message}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-navigation">
          <div className="navigation-controls">
            <img
              className="scroll-buttion-icon"
              loading="lazy"
              alt="Previous"
              src="/scroll-buttion.svg"
              onClick={handlePrevClick}
            />
            <img
              className="scroll-buttion-icon1"
              loading="lazy"
              alt="Next"
              src="/scroll-buttion-1.svg"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCarousel.propTypes = {
  className: PropTypes.string,
};

export default TestimonialCarousel;
