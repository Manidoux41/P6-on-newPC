import mongoose from 'mongoose';

const dbConn = process.env.MONGODB_CONN
const dbName = process.env.MONGODB_DATANAME

mongoose.set('strictQuery', true)
mongoose.connect(
    `mongodb+srv://${dbConn}@test-apis.chorlw4.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});