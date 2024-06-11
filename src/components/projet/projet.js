import React, { useState } from 'react';
import Slide from './slide';
import GithubSlide from './githubSlide';
import alter_ergo from '../../assets/projet/alter_ergo.png';
import cap_etude from '../../assets/projet/cap_etude.png';
import garage from '../../assets/projet/garage.png';
import voyo from '../../assets/projet/voyo.png';
import imagePath from '../../imagePath';
import GithubIcon from '../../assets/icon/GitHub_black.svg';


const Projet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: cap_etude,
      title: "Application Cap'Études",
      text: "Il s'agit d'une application mobile multiplateforme, ayant pour objectif de remplacer l'espace locataire présent sur le site Cap'Études. L'application permet de consulter ses documents, de contacter les Cap'études pour divers sujets et de déclarer un incident.",
      techno: imagePath['projectTechno']['cap_etude'],
      repoURL:""
    },
    {
      src: voyo,
      title: 'Voyo',
      text: "Voyo est un projet universitaire d'application mobile réalisé dans le cadre de ma 3e année en BUT informatique. L'objectif est de mettre en relation deux utilisateurs afin de permettre aux personnes souhaitant déménager, mais ne pouvant pas assister physiquement à la visite du bien immobilier, de mandater quelqu'un pour faire la visite à leur place et leur faire un compte rendu.",
      techno: imagePath['projectTechno']['voyo'],
      repoURL:"https://github.com/lugmog2728/SAE5.01-Voyo"
    },
    {
      src: alter_ergo,
      title: 'Alter Ergo',
      text: "Alter Ergo est une plateforme de gestion de paie destinée aux intermittents du spectacle. J'ai notamment travaillé sur la mise en place d'un système de gestion de tâches asynchrones.",
      techno: imagePath['projectTechno']['alter_ergo'],
      repoURL:""
    },
    {
      src: garage,
      title: 'Garage',
      text: "Ce projet est un logiciel Web réalisé au cours de ma 2e année en BUT informatique. L'objectif était de développer un logiciel métier clé en main à destination d'un garage automobile. Il devait permettre la gestion des rendez-vous clients (comprenant devis et facturation) ainsi que le suivi des stocks du garage.",
      techno: imagePath['projectTechno']['garage'],
      repoURL:"https://github.com/lugmog2728/SAE3.01-Garage"
    },
   
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length ? 0 : prev + 1));
  };

  return (
    <div id="projet" className='flex justify-center my-16'>
      <div id="indicators-carousel" className="relative w-11/12">
        <div className="relative overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <Slide 
              key={index}
              src={slide.src}
              title={slide.title}
              text={slide.text}
              technos={slide.techno}
              isActive={index === currentSlide}
              totalSlides={slides.length+1}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              repoUrl={slide.repoURL}
            />
          ))}
          <GithubSlide 
            src={GithubIcon}
            title="Encore plus de projets"
            text="Pour découvrir davantage de mes projets, consultez mon GitHub. Vous y trouverez une sélection variée d'applications et de travaux que j'ai réalisés. N'hésitez pas à explorer mon profil pour voir l'ensemble de mes projets."
            isActive={currentSlide === slides.length}
            totalSlides={slides.length+1}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            repoUrl="https://github.com/lugmog2728" 
          />

        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Projet;
