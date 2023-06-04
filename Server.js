const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const routes=require('./routes/Todoroutes')
const app=express()
const PORT=process.env.port|| 5000
//const MONGODB_URI='mongodb+srv://Virein:virein123@atlascluster.uwtmn.mongodb.net/Crudapp?retryWrites=true&w=majority'
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connnected to mongodb`))
app.use(routes)
app.listen(PORT,() => console.log(`Listening on:${PORT}`))