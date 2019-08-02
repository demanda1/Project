const server=require('express').Router()
const fetchDetails=require('../Services/fetchDetails')
const fetchdetails=new fetchDetails()

server.get('/productdetails',(req,res)=>{
    res.setHeader('content-type','application/json')
    product=fetchdetails.fetchProductDetails(req.headers.category)
    res.end(JSON.stringify({products:product}))
})


module.exports=server