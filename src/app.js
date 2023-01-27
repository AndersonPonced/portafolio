const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const router = require('./routes/router')

const app = express();

app.set('port', process.env.PORT || 9000)
const dboption = {
    host:'127.0.0.1' ,
    port:3306,
    user: "root",
    password:"hola",
    database:"walletFresh"
}


//middlewares-------------------------------------------


app.use(myconn(mysql, dboption, 'single'))
app.use(express.json())
app.use(cors())

//routes------------------------------------------------
app.get('/', (req, res )=>{
     res.send('Bienvenido a mi api')
   

})

app.use('/api',  router)


//server running----------------------------------
app.listen(app.get('port'),()=>{

   console.log('server corre el puerto', app.get('port'))



})