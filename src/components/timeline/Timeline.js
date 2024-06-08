import React from "react";
import Item from "./Item";
import EtudeIcon from "../../assets/icon/etude.png";
import ProIcon from "../../assets/icon/pro.png";

const Timeline = () => {
  return (
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <div className="sticky top-0 text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0">
            <h3 className="text-3xl font-semibold">Mes expériences</h3>
            <span className="text-sm font-bold tracking-wider uppercase">
              professionnel et académique
            </span>
          </div>
        </div>
        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <ol className="relative border-s-4 border-oceanblue mx-8 mb-8">
          <Item
              title={"Baccalauréat"}
              place={"Lycée Les Catalin, Montélimar (26)"}
              date={"Juin 2021"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."}
              tag={false}
              icon={EtudeIcon}/>
            <Item
              title={"BUT Informatique"}
              place={"IUT de Valence (26)"}
              date={"Septembre 2021 à juillet 2024"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."}
              tag={false}
              icon={EtudeIcon}/>
            <Item
              title={"Développeur full stack"}
              place={"Timberlee (Stage)"}
              date={"Avril à juin 2023"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."}
              tag={false}
              icon={ProIcon}/>
            <Item
              title={"Chargé de projet informatiques"}
              place={"Realites Hospitality (Alternance)"}
              date={"Septembre 2023 à juillet 2024"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."}
              tag={false}
              icon={ProIcon}/>
            <Item
              title={"MBA Développeur full stack"}
              place={"MyDigitalSchool Lyon"}
              date={"Septembre 2024 à juillet 2026"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."}
              tag={true}
              icon={EtudeIcon}/>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
