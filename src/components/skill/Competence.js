import React from 'react';
import Category from './Category';


const Competence = () => {
  return (
    <div className="flex justify-around items-start p-5 gap-5">
      <Category title={"Langages"} folder={"langage"} />
      <Category title={"Frameworks"} folder={"framework"}/>
      <Category title={"Logiciels"} folder={"logiciel"}/>
    </div>
  );
};

export default Competence;
