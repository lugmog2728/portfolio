import React, { useState } from 'react';
import alter_ergo from '../../assets/projet/alter_ergo.png';
import cap_etude from '../../assets/projet/cap_etude.png';
import garage from '../../assets/projet/garage.png';
import voyo from '../../assets/projet/voyo.png';

const Projet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [alter_ergo, cap_etude, garage, voyo];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='flex justify-center'>
        <div id="indicators-carousel" className="relative w-2/3">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute transition duration-700 ease-in-out transform ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                    <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
                </div>
                ))}
            </div>

            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {slides.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-oceanblue' : 'bg-gray-400'}`}
                    aria-current={index === currentSlide}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                ></button>
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
