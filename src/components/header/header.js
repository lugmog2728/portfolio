import React from 'react';
import ContactIcon from '../../assets/icon/contact.svg';
import GithubIcon from '../../assets/icon/GitHub_white.svg';
import LinkedinIcon from '../../assets/icon/linkedin_white.svg';
import MailIcon from '../../assets/icon/mail_white.svg';
import Me from '../../assets/autre/me.jpg';

const Header = () => {
  return (
    <div className="relative">
      <div className='w-full h-[40rem] bg-gradient-to-bl from-secondary via-transitionBlue/95 to-secondary bg-opacity-5'>
        <div className="h-20 w-2/3 relative">
          <div className="h-full w-2/3 bg-lightGreen float-left"></div>
          <div className="h-full w-1/3 bg-gradient-to-r from-lightGreen to-transparent float-left"></div>
          <div className='h-full w-2/3 flex items-center absolute top-0 left-0'>
            <a href="#section1" className="text-white ml-5 text-2xl">Compétences</a>
            <a href="#section2" className="text-white ml-5 text-2xl">Parcours</a>
            <a href="#section3" className="text-white mx-5 text-2xl">Projets</a>
            <a href="#section4" className="flex items-center text-lightGreen mx-5 p-2 text-2xl bg-white rounded-md">
              <img src={ContactIcon} alt="Contact" className="w-8 h-8 mr-2" />
              Contactez-moi
            </a>
          </div>
        </div>
        
        <div className='h-[calc(40rem-5rem)] w-full flex'>
          <div className='flex items-center justify-center w-3/5 h-full'>
            <div className='w-3/5'>
              <h1 className='text-white text-4xl'>Bonjour, je suis Lucas Gardanne</h1>
              <h2 className='text-white text-3xl'>Alternant développeur fullstack</h2>
              <p className='text-white text-xl mt-4'>Bienvenue sur mon portfolio ! Passionné par le développement web et mobile, je vous présente ici mon travail et ma passion pour l'informatique.</p>
              <p className='text-white text-xl mt-4'>N'hésitez pas à me contacter pour toute question ou opportunité. Merci de votre visite ! ✨</p>
              <div className='w-full flex mt-6'>
                {/* Github */}
                <div className="relative mr-4 group">
                  <a href='https://github.com/lugmog2728'>
                    <img src={GithubIcon} alt="Github" className="w-14 h-14" />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ whiteSpace: "nowrap" }}>
                      github.com/lugmog2728
                      <span className="absolute rotate-180 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-t-8 border-t-oceanblue border-l-8 border-l-transparent border-r-8 border-r-transparent"></span>
                    </span>
                  </a>  
                </div>
                {/* LinkedIn */}
                <div className="relative mr-4 group">
                  <a href='https://www.linkedin.com/in/lucas-gardanne/'>
                    <img src={LinkedinIcon} alt="Linkedin" className="w-14 h-14" />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ whiteSpace: "nowrap" }}>
                      linkedin.com/in/lucas-gardanne/
                      <span className="absolute rotate-180 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-oceanblue"></span>
                    </span>
                  </a>
                </div>
                {/* Mail */}
                <div className="relative group">
                  <a href='mailto:lgardanne@gmail.com'>
                    <img src={MailIcon} alt="Mail" className="w-14 h-14" />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-oceanblue text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ whiteSpace: "nowrap" }}>
                      lgardanne@gmail.com
                      <span className="absolute rotate-180 left-1/2 top-0 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-oceanblue"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-end justify-center w-2/5 h-full'>
            <img src={Me} className="object-cover h-[90%] w-auto rounded-t-full shadow-lg" alt="Lucas Gardanne" />
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-darkblue"></div>
    </div>
  );
};

export default Header;
