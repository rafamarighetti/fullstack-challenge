const mongoose = require("mongoose");
const { Schema } = mongoose;

const clienteInadimplenteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    require: true,
  },
  desde: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("indaimplentes", clienteInadimplenteSchema);
