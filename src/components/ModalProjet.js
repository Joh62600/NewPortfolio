import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalProjet.css';

Modal.setAppElement('#root'); // Assurez-vous que le sélecteur correspond à votre élément root

const ModalProjet = ({ show = true, onClose, project }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!project || !project.images) {
    return null;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
    setIsImageModalOpen(false);
  };

  const handleCloseMainModal = () => {
    setSelectedImage(null);
    setIsImageModalOpen(false);
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={handleCloseMainModal}
        contentLabel="Project Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button className="close-button" onClick={handleCloseMainModal}>
            &times;
          </button>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              Voir sur GitHub
            </a>
          )}

          {project.skills && project.skills.length > 0 && (
            <div className="modal-skills">
              <h3>Compétences acquises</h3>
              <ul className="skills-list">
                {project.skills.map((skill, index) => (
                  <li key={index} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-technologies">
            <h3>Technologies utilisées</h3>
            <div className="technologies-list">
              {project.technologies.map((tech, index) => (
                <div key={index} className="technology-item">
                  <img src={tech.logo} alt={tech.name} className="technology-logo" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="project-images">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="project-image"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={handleCloseImageModal}
        contentLabel="Image Modal"
        className="image-modal"
        overlayClassName="image-modal-overlay"
      >
        <div className="image-modal-content">
          <button className="close-button close-button-white" onClick={handleCloseImageModal}>
            &times;
          </button>
          {selectedImage && <img src={selectedImage} alt="Selected" className="modal-image" />}
        </div>
      </Modal>
    </>
  );
};

export default ModalProjet;
