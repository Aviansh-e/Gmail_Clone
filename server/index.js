import express from "express";
import cors from 'cors';



import Connection from "./database/db.js";
import routes from "./route/route.js";

const app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Connection();
app.use('/', routes);
app.listen(8000, () => {
    console.log("server is successfully started in port 8000");
});