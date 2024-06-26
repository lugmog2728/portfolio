import React from 'react';

const Slide = ({ src, title, text, technos, isActive, totalSlides, currentSlide, setCurrentSlide, repoUrl }) => {
  return (
    <div className={`w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-row items-center justify-center w-full">
          <img src={src} className="block w-1/5 h-auto" alt="Slide" />
          <div className="w-2/5 p-4 ">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <div className="w-12 h-1 bg-secondary rounded-full my-2"></div>
            <p className="mb-4 break-words">{text}</p>
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
              >
                Repository github
              </a>
            )}
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center my-4 space-x-2">
          {technos.map((techno, index) => (
            <img
              key={index}
              src={techno}
              className="h-14 px-2 mb-2"
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
