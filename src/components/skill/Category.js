import React from "react";
import Item from "./Items";

const Category= ({title}) => {
  return (
    <div className="w-1/3 text-center p-5">
      <h2 className="relative m-0 pb-2 text-xl font-bold">{title}</h2>
      <div className="w-1/3 h-0.5 bg-black mx-auto"></div>
      <Item folder={"langage"}/>
    </div>
  );
};

export default Category;
