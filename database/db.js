import mongoose from 'mongoose';


const Connection= async (username,password)=>{
const url=`mongodb+srv://${username}:${password}@blog-app.qzqa9wo.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(url);
       console.log('Database Connected Successfully')
    }catch(error){
        console.log('Error while connecting database',error)

    }
}

export default Connection;