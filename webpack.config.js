const path = require('path');

module.exports = {
  entry: './js/script.js', // El punto de entrada de tu aplicación
  output: {
    filename: 'quiz.js', // El nombre del archivo de salida después de la compilación
    path: path.resolve(__dirname, 'dist'), // La carpeta de salida para los archivos generados
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Las reglas para los archivos CSS
        use: ['style-loader', 'css-loader'], // Los loaders que se aplicarán a los archivos CSS
      },
    ],
  },
};
