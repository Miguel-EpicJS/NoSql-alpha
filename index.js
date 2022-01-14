const mongoose = require("mongoose");
const { Schema } = mongoose;

const aula4Commands = require("./aula04/aula4-commands");

mongoose.connect('mongodb://127.0.0.1:27017/enterprise');

const clientSchema = new Schema({
  username: String,
  email: String,
  password: String,
  price: Number,
  preference: String
}, { collection: "client"});

const Client = mongoose.model("Client", clientSchema);

aula4Commands.aggregationForClients(Client);

mongoose.disconnect();