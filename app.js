var express = require ('express')
var port = 3000;
const app = express ();

app.get('/', function(req, res){
    console.log ("hello");
    res.send('Tu es un genie')
})

app.listen (port,function(){
    console.log ("démarage sur http://localhost" +port)
})