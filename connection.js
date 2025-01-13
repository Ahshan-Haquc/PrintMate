const express = require('express');
const app = express();
const path = require('path');
const router = require("./model/router");

app.use(express.static('public'));

const port = 3000;
app.set('view engine','ejs');
app.set('views', path.resolve('./views'));

app.use("/",router);

app.listen(port,()=>{
    console.log("Listening on port ",port);
})