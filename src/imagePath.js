const imagePaths = {
        langage: require.context("./assets/langage", false, /\.(png|jpe?g|svg)$/),
        framework: require.context("./assets/framework", false, /\.(png|jpe?g|svg)$/),
        logiciel: require.context("./assets/logiciel", false, /\.(png|jpe?g|svg)$/)
      };
      
export default imagePaths;
      