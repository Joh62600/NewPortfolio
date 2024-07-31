import React, { useState } from 'react';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import ProgressBar from '../components/ProgressBar';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Modal from '../components/ModalProjet';

// Chemins relatifs pour les images
import moi from '../assets/img/moi.jpg';
import DevWebImage from '../assets/img/DevWeb.webp';
import bannerImage from '../assets/img/Banner.webp';
import BannerQuotes from '../assets/img/BannerQuotes.webp';
import cvImage from '../assets/img/cvImage.png';

import HomeP6 from '../assets/img/p6/HomeP6.png';
import LoginP6 from '../assets/img/p6/LoginP6.png';
import ModeEditionP6 from '../assets/img/p6/ModeEditionP6.png';

import AboutP8 from '../assets/img/p8/AboutP8.png';
import FicheLogementP8 from '../assets/img/p8/FicheLogementP8.png';
import HomeP8 from '../assets/img/p8/HomeP8.png';

import ContactP10 from '../assets/img/p10/ContactP10.png';
import FiltreP10 from '../assets/img/p10/FiltreP10.png';
import HomeP10 from '../assets/img/p10/HomeP10.png';
import FooterP10 from '../assets/img/p10/FooterP10.png';

// Import logos des technologies
import htmlLogo from '../assets/img/Tech/html.png';
import cssLogo from '../assets/img/Tech/css.png';
import jsLogo from '../assets/img/Tech/js.png';
import reactLogo from '../assets/img/Tech/react.png';
import reduxLogo from '../assets/img/Tech/redux.png';
import sassLogo from '../assets/img/Tech/sass.png';
import sqlLogo from '../assets/img/Tech/sql.png';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio d'architecte",
      description: "Ce projet consiste en la création d'un portfolio interactif pour un architecte, intégrant une galerie dynamique des travaux récupérés depuis un back-end.",
      images: [HomeP6, LoginP6, ModeEditionP6],
      githubLink: "https://github.com/Joh62600/Projet-6",
      skills: [
        "Gestion de projet",
        "Développement Frontend",
        "Intégration continue"
      ],
      technologies: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
      ],
    },
    {
      title: 'Projet React',
      description: "Le projet consiste en la création de l'application web Kasa en utilisant React. Il intègre des fonctionnalités avancées telles que le routage, des carrousels d'images dynamiques, et la gestion des erreurs, tout en affichant et filtrant les propriétés conformément aux maquettes fournies.",
      images: [HomeP8, AboutP8, FicheLogementP8],
      githubLink: "https://github.com/Joh62600/kasa",
      skills: [
        "Développement React",
        "Gestion des états",
        "Utilisation des hooks"
      ],
      technologies: [
        { name: 'React', logo: reactLogo },
        { name: 'CSS', logo: cssLogo },
      ],
    },
    {
      title: 'Projet débug',
      description: "Ce projet consiste à installer, configurer et déboguer une application React en utilisant les outils de développement et de tests. L'objectif est de s'assurer que toutes les fonctionnalités sont opérationnelles et conformes aux besoins du client.",
      images: [HomeP10, ContactP10, FiltreP10, FooterP10],
      githubLink: "https://github.com/Joh62600/Projet10",
      skills: [
        "Débogage",
        "Tests unitaires",
        "Configuration des outils"
      ],
      technologies: [
        { name: 'JavaScript', logo: jsLogo },
        { name: 'React', logo: reactLogo },
      ],
    }
  ];

  const quotes = [
    { text: "Le code, c'est comme l'humour. Quand vous devez l'expliquer, c'est mauvais.", author: "Cory House" },
    { text: "D'abord, résolvez le problème. Ensuite, écrivez le code.", author: "John Johnson" },
    { text: "L'expérience est le nom que tout le monde donne à ses erreurs.", author: "Oscar Wilde" }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="home" id="home">
      <section className="intro">
        <div className="image-overlay-container">
          <img className="background" src={DevWebImage} alt="Développeur Web" />
          <p className="overlay-text-title">JOHANN PLEE</p>
          <p className="overlay-text">Intégrateur Web</p>
        </div>
        <h2 className='TitreInfo' id='profil'>À propos de moi</h2>
        <div className="pres">
          <img src={moi} alt="Johann Plee" className="my-image" />
          <p>Je suis un développeur web passionné récemment diplômé de la formation d'Intégrateur Web chez OpenClassrooms. Grâce à cette formation rigoureuse, j'ai acquis des compétences en HTML, CSS, JavaScript, ainsi que des frameworks et bibliothèques modernes comme React et Redux. Je suis motivé par la création de sites web interactifs et responsives qui offrent une expérience utilisateur exceptionnelle. Mon approche est centrée sur l'utilisateur, combinant une solide compréhension des principes de design avec des compétences techniques avancées pour développer des sites web performants et intuitifs.</p>
        </div>
      </section>
      <section>
        <Banner
          title="Actuellement :"
          text="en recherche d'emploi"
          image={bannerImage}
        />
      </section>
      <div className="comp-cv-container">
        <section className='comp'>
          <h2>Compétences techniques</h2>
          <ProgressBar label="HTML" value={9} logo={htmlLogo} />
          <ProgressBar label="CSS" value={8} logo={cssLogo} />
          <ProgressBar label="JavaScript" value={6} logo={jsLogo} />
          <ProgressBar label="React" value={7} logo={reactLogo} />
          <ProgressBar label="Redux" value={5} logo={reduxLogo} />
          <ProgressBar label="Scss" value={5} logo={sassLogo} />
          <ProgressBar label="SQL" value={4} logo={sqlLogo} />
        </section>
        <section className='cv' id='competences'>
          <h2>CV</h2>
          <img src={cvImage} alt="CV Johann Plee" className="cv-image" />
          <a href={cvImage} download="Johann_Plee_CV.pdf" className="cv-download-button">
            Télécharger le CV
          </a>
        </section>
      </div>
      <section>
        <Banner
          image={BannerQuotes}
          quotes={quotes}
        />
      </section>
      <section className="projects" id="projects">
        <h2>Mes Projets</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              images={project.images}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </section>
      <section className='contact' id='contact'>
        <Contact />
      </section>
      <Modal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        project={selectedProject} 
      />
    </div>
  );
};

export default Home;
