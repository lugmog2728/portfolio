import React from "react";
import Item from "./Item";
import EtudeIcon from "../../assets/icon/etude.png";
import ProIcon from "../../assets/icon/pro.png";

const items = [
  {
    title: "Baccalauréat",
    place: "Lycée Les Catalin, Montélimar (26)",
    date: "Juin 2021",
    text: "Obtention du baccalauréat STI2D option Système d'Information et Numerique avec mention Bien.",
    tag: false,
    icon: EtudeIcon,
  },
  {
    title: "BUT Informatique parcours réalisation d'applications conception développement validation",
    place: "IUT de Valence (26)",
    date: "Septembre 2021 à juillet 2024",
    text: "Au cours de mon BUT Informatique, j'ai développé des compétences solides en développement logiciel, Web et mobile, en réseaux, et en bases de données.<br/>J'ai participé à divers projets, allant de la création de sites web à des applications mobiles, utilisant des langages tels que PHP, Java et JavaScript.<br/>Cette formation m'a également permis de maîtriser la gestion de projets et le travail en équipe.",
    tag: false,
    icon: EtudeIcon,
  },
  {
    title: "Développeur full stack",
    place: "Timberlee (Stage)",
    date: "Avril à juin 2023",
    text: "En deuxième année, j'ai effectué un stage de 3 mois durant lequel j'ai participé au développement d'un intranet de paiement. J'ai notamment dû implémenter la communication avec une API externe au sein d'un système de gestion de tâches asynchrones.",
    tag: false,
    icon: ProIcon,
  },
  {
    title: "Chargé de projet informatiques",
    place: "Realites Hospitality (Alternance)",
    date: "Septembre 2023 à juillet 2024",
    text: "Durant ma dernière année de BUT en alternance chez Realites Hospitality, j'ai participé à divers projets.<br/>Notamment, j'ai dirigé avec succès un projet de migration et d'amélioration de l'espace locataire vers une application mobile multiplateforme.<br/>Cette expérience m'a permis de renforcer mes compétences en développement web et mobile, ainsi qu'en gestion de projet.",
    tag: false,
    icon: ProIcon,
  },
  {
    title: "MBA Développeur fullstack",
    place: "MyDigitalSchool Lyon",
    date: "Septembre 2024 à juillet 2026",
    text: "J'ai été accepté dans le MBA Développeur Fullstack à l'école My Digital School Lyon. Pendant cette période de deux ans, je vais pouvoir renforcer mes compétences en informatique et élargir mon expérience professionnelle grâce à un contrat d'apprentissage.",
    tag: true,
    icon: EtudeIcon,
  },
];

const Timeline = () => {
  return (
    <div id="timeline"className="container max-w-5xl px-4 py-12 mx-auto mt-16">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-3/12">
          <div className="sticky top-0 text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0">
            <h3 className="text-3xl font-semibold">Mes expériences</h3>
            <span className="text-sm font-bold tracking-wider uppercase">
              professionnel et académique
            </span>
          </div>
        </div>
        <div className="relative sm:w-9/12 px-4 space-y-6">
          <ol className="relative border-s-4 border-oceanblue mx-8 mb-8">
            {items.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                place={item.place}
                date={item.date}
                text={item.text}
                tag={item.tag}
                icon={item.icon}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};


export default Timeline;
