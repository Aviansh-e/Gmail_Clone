import mongoose from "mongoose";


const Connection = () => {
    const DB_URL = "mongodb://localhost:27017";
    try {
        mongoose.connect(DB_URL, { useNewUrlParser: true });
        console.log("DataBase is successfully connected");
    } catch (error) {
        console.log("dataBase is not succesfully connceted and error is ", error.message);
    }
}

export default Connection;