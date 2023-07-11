import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';


import Connection from './database/db.js';

import router from './routes/route.js';

dotenv.config();

const __dirname=path.resolve();

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',router);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });




    app.use(express.static(path.join(__dirname,"./client/build")));
    app.get('*',function(_,res){
            res.sendFile(path.join(__dirname,"./client/build/index.html")), function(err){
                res.status(500).send(arr);
            }
    }   
    )


const PORT=process.env.PORT||8000;

app.listen(PORT, ()=>console.log(`Server is running successfully on port ${PORT}`));


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const url=process.env.MONGO_URI||`mongodb+srv://${username}:${password}@blog-app.qzqa9wo.mongodb.net/?retryWrites=true&w=majority`;

Connection(url);
