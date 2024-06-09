import PHP from "./assets/langage/PHP.svg";
import Symfony from "./assets/framework/Symfony.svg";
import Flutter from "./assets/framework/Flutter.svg";
import Api_platform from "./assets/framework/Api_platform.svg";

const imagePaths = {
        langage: require.context("./assets/langage", false, /\.(png|jpe?g|svg)$/),
        framework: require.context("./assets/framework", false, /\.(png|jpe?g|svg)$/),
        logiciel: require.context("./assets/logiciel", false, /\.(png|jpe?g|svg)$/),
        projectTechno: {alter_ergo: [PHP, Symfony, Flutter, Api_platform],
                        cap_etude: [Symfony, Flutter, PHP],
                        garage: [Api_platform, PHP, Symfony, Flutter],
                        voyo: [Symfony, Flutter, PHP, Api_platform],
        }
      };
      
export default imagePaths;
      