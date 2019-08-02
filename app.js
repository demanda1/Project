const express=require('express')
const app=express()
const parser=require('body-parser')
const cors=require('cors')
const productroute=require('./Routes/productRoutes')

app.use(cors())
app.use(parser.json())

app.use('/productroute',productroute)



var PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})