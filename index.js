require("dotenv").config()
const express= require("express")
const app=express()

const cors= require("cors")
const{dataconnection}=require("./config/db")
const Router=require("./routes/exchange")
app.use(cors())
app.use(express.json())


app.use("/",Router)




/////////////////////server getting//////////////////
app.listen(process.env.port,async()=>{
    try{
        await dataconnection
    }
    catch(err){
        console.log(err)
        console.log("Database connection Failed")
    }
    console.log(`Running on port ${process.env.port}`)
})