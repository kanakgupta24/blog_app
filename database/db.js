import mongoose from 'mongoose';


const Connection= async (url)=>{
 
    try{
       await mongoose.connect(url);
       console.log('Database Connected Successfully')
    }catch(error){
        console.log('Error while connecting database',error)

    }
}

export default Connection;