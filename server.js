import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import productRoute from './Routers/productRouter.js'

//express init 
const app = express();

//configure dotenv
dotenv.config();

//cors middleware
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["GET","PUT","POST","DELETE"]
}));

//default route
app.get("/",(req,res)=>{
    res.status(200).send("welcome to out API")
})
//default middleware req.body
app.use(express.json())
//custom routers
app.use('/api/product',productRoute)

//Port declare
const port = process.env.PORT || 5000;

//start the server
app.listen(port,()=>{
    console.log("server started and running on the port");
    
})
