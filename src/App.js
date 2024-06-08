import React from 'react';
import Competence from './components/skill/Competence';
import Copyright from './components/Copyright/Copyright';
import Timeline from './components/timeline/Timeline';
import './index.css';

const App = () => {
  return (
    <div className="bg-lightBlue">
      <Competence />
      <Timeline/>
      <Copyright firstname={"Gardanne"} name={"Lucas"} year={2024} />
    </div>
  );
};

export default App;
