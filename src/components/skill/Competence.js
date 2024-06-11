import React from 'react';
import Category from './Category';


const Competence = () => {
  return (
    <div id="competence" className="w-full flex justify-center mt-16">
      <div className='w-10/12 flex justify-around items-start p-5 gap-5'>
        <Category title={"Langages"} folder={"langage"} />
        <Category title={"Frameworks"} folder={"framework"}/>
        <Category title={"Logiciels"} folder={"logiciel"}/>
      </div>
    </div>
  );
};

export default Competence;
