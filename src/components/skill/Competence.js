import React from 'react';
import Category from './Category';


const Competence = () => {
  return (
    <div className="flex justify-around items-start p-5 gap-5">
      <Category title={"Langages"} />
      <Category title={"Frameworks"}/>
      <Category title={"Logiciels"}/>
    </div>
  );
};

export default Competence;
