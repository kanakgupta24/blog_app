import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';



import router from './routes/route.js';

dotenv.config();

import mongoose from 'mongoose';

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const Connection= async ()=>{
const url=`mongodb+srv://${username}:${password}@blog-app.qzqa9wo.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(url);
       console.log('Database Connected Successfully')
    }catch(error){
        console.log('Error while connecting database',error)

    }
}

// Connection(username,password);


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

    Connection().then(() => {
        console.log("db connected");
        app.listen(PORT, ()=>console.log(`Server is running successfully on port ${PORT}`));
    })




