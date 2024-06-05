import React from "react";

const Items = ({ folder }) => {
  const importImages = (path) => {
    const context = require.context("../../assets/logiciel", false, /\.(png|jpe?g|svg)$/);
    return context.keys().map((item, index) => ({
      src: context(item),
      alt: `Image ${index + 1}`,
    }));
  };

  const path = "../../assets/" + folder;
  console.log(path === "../../assets/langage");
  const images = importImages(path);

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      {images.map((image, index) => (
        <div key={index} className="w-1/4 p-2 mx-2 my-2 bg-primary rounded-2xl shadow-md border-2 border-secondary">
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full h-auto "
          />
        </div>
      ))}
    </div>
  );
};

export default Items;
