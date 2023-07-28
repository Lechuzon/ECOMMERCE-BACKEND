const mongoose = require('mongoose')
const validateMongoDbId = (id) => {
    const isValid=mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error('Este id no es valido o no se ha encontrado')
};

module.exports = validateMongoDbId;