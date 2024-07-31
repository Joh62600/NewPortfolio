import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, images, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && images && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500); // Change image every 1.5 seconds
    } else {
      setCurrentImageIndex(0); // Reset to first image when not hovered
    }
    return () => {
      clearInterval(interval);
    };
  }, [isHovered, images]);

  if (!images || images.length === 0) {
    return null; // or some fallback UI
  }

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <h3 className="project-title">{title}</h3>
      <div
        className="project-image-container"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
      </div>
    </div>
  );
};

export default ProjectCard;
