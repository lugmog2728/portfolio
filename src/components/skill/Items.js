import React from "react";
import imagePaths from "../../imagePath";

const importImages = (folder) => {
  const context = imagePaths[folder];
  if (!context) {
    console.error(`Folder '${folder}' not found in imagePaths`);
    return [];
  }
  return context.keys().map((item) => {
    const fileName = item
      .match(/\/([^/]+)\.(png|jpe?g|svg)$/)[1]
      .replace(/_/g, " ");
    return {
      src: context(item),
      alt: fileName,
    };
  });
};

const Items = ({ folder }) => {
  const images = importImages(folder);

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-1/4 p-2 mx-2 my-2 bg-primary rounded-2xl shadow-md border-2 border-secondary relative group"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full h-auto inline-block"
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-3 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ whiteSpace: "nowrap" }}
          >
            {image.alt}
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-oceanblue"></span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Items;
