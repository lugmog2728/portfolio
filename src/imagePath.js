import PHP from "./assets/langage/PHP.svg";
import Html from "./assets/langage/HTML5.svg";
import Css from "./assets/langage/CSS3.svg";
import Js from "./assets/langage/JavaScript.svg";
import Mysql from "./assets/langage/MySQL.svg";
import Postgresql from "./assets/langage/PostgresSQL.svg";
import Dart from "./assets/langage/Dart.svg";

import Aspnet from "./assets/autre/Asp.net.png";

import Symfony from "./assets/framework/Symfony.svg";
import Twig from "./assets/framework/Twig.svg";
import Boostrap from "./assets/framework/Bootstrap.svg";
import Flutter from "./assets/framework/Flutter.svg";
import Api_platform from "./assets/framework/Api_platform.svg";
import Ionic from "./assets/framework/Ionic.svg";
import Angular from "./assets/framework/Angular.svg";
import Typescript from "./assets/framework/TypeScript.svg";


const imagePaths = {
        langage: require.context("./assets/langage", false, /\.(png|jpe?g|svg)$/),
        framework: require.context("./assets/framework", false, /\.(png|jpe?g|svg)$/),
        logiciel: require.context("./assets/logiciel", false, /\.(png|jpe?g|svg)$/),
        projectTechno: {alter_ergo: [Html, Css,  PHP, Js, Mysql, Twig, Boostrap, Symfony], 
                        cap_etude: [Html, Css, Js, PHP, Symfony, Api_platform, Twig, Ionic, Angular, Typescript ],
                        garage: [Html, Css, Js, PHP, Postgresql, Boostrap],
                        voyo: [Dart, Flutter, Aspnet, Postgresql]
        }
      };
      
export default imagePaths;
      
