module.exports = {
    createClients: (client) => {
        client.insertMany([
            {username: "Alpha", email: "alpha@alpha.com", password: "asd", price: 150.99, preference: "VIP+"},
            {username: "Joaozinho", email: "jojo@gmail.com", password: "senha123", price: 0.99, preference: "Normal"},
            {username: "Miguel", email: "miguel@gmail.com", password: "umasenhadificileesperta", price: 10.99, preference: "VIP"},
            {username: "a", email: "asd@asd.com", password: "asd", price: 120.80, preference: "VIP+"},
            {username: "b", email: "bsd@asd.com", password: "asd", price: 60.80, preference: "VIP+"},
            {username: "c", email: "csd@asd.com", password: "asd", price: 88.80, preference: "VIP+"},
            {username: "d", email: "dsd@asd.com", password: "asd", price: 96.80, preference: "VIP+"},
            {username: "e", email: "esd@asd.com", password: "asd", price: 101.80, preference: "VIP+"},
            {username: "f", email: "figuel@gmail.com", password: "umasenhadificileesperta", price: 18.99, preference: "VIP"},
            {username: "g", email: "giguel@gmail.com", password: "umasenhadificileesperta", price: 23.99, preference: "VIP"},
            {username: "h", email: "higuel@gmail.com", password: "umasenhadificileesperta", price: 16.99, preference: "VIP"},
            {username: "i", email: "iiguel@gmail.com", password: "umasenhadificileesperta", price: 12.99, preference: "VIP"},
            {username: "Aoaozinho", email: "jojo@gmail.com", password: "senha123", price: 6.99, preference: "Normal"},
            {username: "Boaozinho", email: "jojo@gmail.com", password: "senha123", price: 4.99, preference: "Normal"},
            {username: "Coaozinho", email: "jojo@gmail.com", password: "senha123", price: 2.99, preference: "Normal"},
            {username: "Doaozinho", email: "jojo@gmail.com", password: "senha123", price: 8.99, preference: "Normal"},
            {username: "Eoaozinho", email: "jojo@gmail.com", password: "senha123", price: 7.99, preference: "Normal"},
            {username: "Foaozinho", email: "jojo@gmail.com", password: "senha123", price: 1.99, preference: "Normal"},
        ]).then(() => {
            console.log("Creating clients");
        }).catch((err) => {
            console.log(err);
        });
    },
    readClients: (client) => {
        client.find((err, cl) => {
            console.log(cl);
            console.log(err);
        });
        client.find({price: {$gt: 10.00 }}, (err, cl) => {
            console.log(cl);
            console.log(err);
        });
    },
    updateClients: (client) => {
        client.updateMany({price: {$gte: 50}}, {$set: { preference: "VIP+" }}).then(() => {
            console.log("--- First update ---");
        });
        client.updateMany({price: {$gte: 10, $lt: 50}}, {$set: { preference: "VIP" }}).then(() => {
            console.log("--- Second update ---");
        });
        client.updateMany({price: {$gte: 0, $lt: 10}}, {$set: { preference: "Normal" }}).then(() => {
            console.log("--- Third update ---");
        });
    },
    deleteClients: (client) => {
        client.deleteMany({ price: {$lt: 10.00} }).then(() => {
            console.log("--- First delete ---");
        });
    },

    aggregationForClients: (client) => {
        client.aggregate([ { $match: { price: {$gte: 0} } }, { $group: { _id: "$preference", sumTotPrice: { $sum: "$price" } } }], (err, cl) => {
            console.log(cl);
            console.log(err);
        });

        client.aggregate([ { $match: { preference: "VIP+" } }, { $group: { _id: "$preference", sumTotPrice: { $sum: "$price" } } }], (err, cl) => {
            console.log(cl);
            console.log(err);
        });

        client.aggregate([ { $match: { preference: "VIP" } }, { $group: { _id: "$preference", sumTotPrice: { $sum: "$price" } } }], (err, cl) => {
            console.log(cl);
            console.log(err);
        });

        client.aggregate([ { $match: { preference: "Normal" } }, { $group: { _id: "$preference", sumTotPrice: { $sum: "$price" } } }], (err, cl) => {
            console.log(cl);
            console.log(err);
        });
    },

    reset: (client) => {
        client.deleteMany({}).then(() => {
            console.log("--- Reseted ---");
        });
    }
};