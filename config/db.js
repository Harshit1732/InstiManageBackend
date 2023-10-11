require('dotenv').config();
const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
const dataconnection=mongoose.connect(process.env.moongoseAtlasurl);

module.exports={dataconnection}