const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
      const conn = mongoose.connect(process.env.MONGODB_URL);
      console.log("Base de datos conectada con éxito");
    } catch (error) {
      console.log("Error de la base de datos");
    }
  };
  module.exports = dbConnect;



