const express= require('express')
const app = express()
const port=3030
const path=require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/turing',(req,res)=>res.sendFile(path.resolve(__dirname,'views','turing.html')))
app.get('/lovelace',(req,res)=>res.sendFile(path.resolve(__dirname,'views','lovelace.html')))
app.get('/index',(req,res)=>res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/hopper',(req,res)=>res.sendFile(path.resolve(__dirname,'views','hopper.html')))
app.get('/hamilton',(req,res)=>res.sendFile(path.resolve(__dirname,'views','hamilton.html')))
app.get('/clarke',(req,res)=>res.sendFile(path.resolve(__dirname,'views','clarke.html')))
app.get('/berners',(req,res)=>res.sendFile(path.resolve(__dirname,'views','berners.html')))
app.get('/babbadage',(req,res)=>res.sendFile(path.resolve(__dirname,'views','babbadage.html')))


app.listen(port,()=>console.log(`Servidor levantado con exito el servidor en http://localhost:${port}`))
