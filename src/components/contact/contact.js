import React from "react";
import Form from "./contactForm";
import Github from "../../assets/icon/GitHub_black.svg";
import Linkedin from "../../assets/icon/linkedin_black.svg";
import Call from "../../assets/icon/telephone.svg";
import Cv from "../../assets/icon/document.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex justify-center mb-8">
      <div className="m-12 w-11/12">
        <div className="w-full flex items-center justify-between mb-8">
          <div className="w-2/5 h-2 bg-secondary rounded-full"></div>
          <h3 className="w-1/5 text-4xl text-center">Contactez-moi</h3>
          <div className="w-2/5 h-2 bg-secondary rounded-full"></div>
        </div>
        <p className="flex justify-center text-xl">
          Accepté à My Digital School Lyon, je suis à la recherche d'une
          entreprise pour m'accompagner dans cette formation au cour d'une
          alternance.
        </p>
        <p className="flex justify-center text-xl mb-5">
          Si mon profil vous interesse, n'hésitez pas à me contacter.
        </p>
        <Form />
        <div className="w-full flex items-center justify-between mt-8">
          <div className="w-1/3 h-2 bg-secondary rounded-full"></div>
          <div className="w-1/3 flex items-center justify-around">
            {/* Github */}
            <div className="relative mr-4 group">
              <a href="https://github.com/lugmog2728">
                <img src={Github} alt="Github" className="w-14 h-14" />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ whiteSpace: "nowrap" }}>
                  github.com/lugmog2728
                  <span className="absolute rotate-180 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-t-8 border-t-oceanblue border-l-8 border-l-transparent border-r-8 border-r-transparent"></span>
                </span>
              </a>
            </div>
            {/* LinkedIn */}
            <div className="relative mr-4 group">
              <a href="https://www.linkedin.com/in/lucas-gardanne/">
                <img src={Linkedin} alt="Linkedin" className="w-14 h-14" />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ whiteSpace: "nowrap" }}>
                  linkedin.com/in/lucas-gardanne/
                  <span className="absolute rotate-180 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-oceanblue"></span>
                </span>
              </a>
            </div>
            {/* Call */}
            <div className="relative mr-4 group">
              <a href="tel:+33643303505">
                <img src={Call} alt="Linkedin" className="w-14 h-14" />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ whiteSpace: "nowrap" }}>
                  06 43 30 35 05
                  <span className="absolute rotate-180 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-oceanblue"></span>
                </span>
              </a>
            </div>
            {/* CV */}
            <div className="relative mr-4 group">
              <a href="/portfolio/assets/CV_Gardanne_Lucas.pdf" download>
                <img src={Cv} alt="CV" className="w-14 h-14" />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ whiteSpace: "nowrap" }}>
                  CV
                  <span className="absolute rotate-180 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-oceanblue"></span>
                </span>
              </a>
            </div>
          </div>
          <div className="w-1/3 h-2 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
