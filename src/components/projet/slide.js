import React from 'react';

const Slide = ({ src, title, text, technos, isActive, totalSlides, currentSlide, setCurrentSlide }) => {
  return (
    <div className={`w-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${isActive ? 'block' : 'hidden'}`}>
      <div className="w-4/5 mx-auto flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className='w-1/2'>
            <img src={src} className="block max-w-full h-auto" alt="Slide" />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{text}</p>
          </div>
        </div>
        <div className="text-center p-4">
          {technos.map((techno, index) => (
            <img
              key={index}
              src={techno}
              className="inline-block h-14 mx-2"
              alt={techno.match(/\/([^/]+)\.(png|jpe?g|svg)$/)[1].replace(/_/g, " ")}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
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
      </div>
    </div>
  );
};

export default Slide;
