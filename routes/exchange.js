const express=require("express")


const Router=express.Router()
const Exchangecontroller= require('../controller/exchangecontroller')

 Router.get('/getData', Exchangecontroller.getData )
 Router.patch('/:id', Exchangecontroller.updateData)
 Router.delete('/:id', Exchangecontroller.deletedata)
 Router.post('/addData', Exchangecontroller.createData)

module.exports=Router