const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const url = `mongodb+srv://${username}:${pw}@cluster0.ul1ddyn.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(" 🟢 Established a connection to the database"))
    .catch(err => console.log(" ⭕ Something went wrong when connecting to the database", err));