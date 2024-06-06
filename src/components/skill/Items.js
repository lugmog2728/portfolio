import React from "react";
import imagePaths from "../../imagePath"; // Assurez-vous que le chemin est correct

const importImages = (folder) => {
  const context = imagePaths[folder];
  if (!context) {
    console.error(`Folder '${folder}' not found in imagePaths`);
    return [];
  }
  return context.keys().map((item, index) => ({
    src: context(item),
    alt: `Image ${index + 1}`,
  }));
};

const Items = ({ folder }) => {
  const images = importImages(folder);

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
