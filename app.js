const express=require('express')
const app=express()
const db=require('./config/monoose.connection')
const ownersRouter=require('./routes/ownersRouter')
const usersRouter=require('./routes/userrRouter')
const productsRouter=require('./routes/productsRouter')

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/",(req, res)=>{
    res.send("herelk")

})

app.listen(3000)