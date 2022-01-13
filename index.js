const mongoose = require("mongoose");
const { Schema } = mongoose;

const aula3Commands = require("./aula03/aula3-commands");

mongoose.connect('mongodb://127.0.0.1:27017/enterprise');

const clientSchema = new Schema({
  username: String,
  email: String,
  password: String,
  price: Number,
  preference: String
}, { collection: "client"});

const Client = mongoose.model("Client", clientSchema);

aula3Commands.reset(Client);

aula3Commands.createClients(Client);
aula3Commands.readClients  (Client);
aula3Commands.updateClients(Client);
aula3Commands.deleteClients(Client);

aula3Commands.reset(Client);
