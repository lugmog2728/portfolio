import React from 'react';
import Competence from './components/skill/Competence';
import Copyright from './components/Copyright/Copyright';
import Timeline from './components/timeline/Timeline';
import Projet from './components/projet/projet';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import './index.css';

const App = () => {
  return (
    <div className="bg-lightBlue">
      <Header />
      <Competence />
      <Timeline/>
      <Projet />
      <Contact />
      <Copyright firstname={"Gardanne"} name={"Lucas"} year={2024} />
    </div>
  );
};

export default App;
