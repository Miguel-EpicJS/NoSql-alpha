module.exports = {
    createClients: (client) => {
        client.insertMany([
            {username: "Alpha", email: "edtech@alpha.com", password: "#KenjiHardCore", price: 15.99, preference: "High"},
            {username: "Joaozinho", email: "jojo@gmail.com", password: "senha123", price: 0.99, preference: "Low"},
            {username: "Miguel", email: "miguel@gmail.com", password: "umasenhadificileesperta", price: 10.99, preference: "Mid"},
            {username: "asd", email: "asd@asd.com", password: "asd", price: 100.99, preference: "Super High"}
        ]).then(() => {
            console.log("Creating clients");
        }).catch((err) => {
            console.log(err);
        });
    },
    readClients: (client) => {
        client.find((err, client) => {
            console.log(client);
            console.log(err);
        });
        client.find({price: {$gt: 10.00 }}, (err, client) => {
            console.log(client);
            console.log(err);
        });
    },
    updateClients: (client) => {
        client.updateMany({preference: {$in: ["High", "Super High"]}}, {$set: { preference: "VIP+" }}).then(() => {
            console.log("--- First update ---");
        });
        client.updateMany({preference: {$in: ["Mid"]}}, {$set: { preference: "VIP" }}).then(() => {
            console.log("--- Second update ---");
        });
        client.updateMany({preference: {$in: ["Low"]}}, {$set: { preference: "Normal" }}).then(() => {
            console.log("--- Third update ---");
        });
    },
    deleteClients: (client) => {
        client.deleteMany({ price: {$lt: 10.00} }).then(() => {
            console.log("--- First delete ---");
        });
    },

    reset: (client) => {
        client.deleteMany({}).then(() => {
            console.log("--- Reseted ---");
        });
    }
};