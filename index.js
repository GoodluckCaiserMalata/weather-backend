// spin up server with express

const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const Routes = require('./Routes/index')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use('/', Routes());

const port = process.env.port || 1145
app.listen(port, () =>{
    console.log(`server running on ${port}`);
})