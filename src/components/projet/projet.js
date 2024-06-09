import React, { useState } from 'react';
import Slide from './slide';
import alter_ergo from '../../assets/projet/alter_ergo.png';
import cap_etude from '../../assets/projet/cap_etude.png';
import garage from '../../assets/projet/garage.png';
import voyo from '../../assets/projet/voyo.png';
import imagePath from '../../imagePath';


const Projet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: alter_ergo,
      title: 'Projet Alter Ergo',
      text: 'Description du projet Alter Ergo.',
      techno: imagePath['projectTechno']['alter_ergo']
    },
    {
      src: cap_etude,
      title: 'Projet Cap Étude',
      text: 'Description du projet Cap Étude.',
      techno: imagePath['projectTechno']['cap_etude']
    },
    {
      src: garage,
      title: 'Projet Garage',
      text: 'Description du projet Garage.',
      techno: imagePath['projectTechno']['garage']
    },
    {
      src: voyo,
      title: 'Projet Voyo',
      text: 'Description du projet Voyo.',
      techno: imagePath['projectTechno']['voyo']
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='flex justify-center my-8'>
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
              totalSlides={slides.length}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          ))}
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
