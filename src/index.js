
import dotenv from 'dotenv'
import connectDB from './db/index.js';
connectDB();

dotenv.config({
    path:'./env'
})

/*import express from 'express'
const app= express();
(async ()=>{
try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on ${process.env.PORT}`)
    })
}
catch(error){
    console.log("Error is :",error)
    throw error;

}

})() */