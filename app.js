var express = require ('express')
var port = 3000;
const app = express ();
app.set('views', './views')
app.set ('view engine','ejs')

// connection à la base de donnée
var mysql =  require ('mysql')
var connexion = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root' ,
    password: '' ,
    database:'essaie'
})


connexion.connect();
connexion.query('SELECT*from utilisateur',function(error, result){
    if (error){
        console.log(error)
    }
    else{
        console.log( result[0])
    }
})

// on appel le 
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
var urlencodedParser = bodyParser.urlencoded({ extended: true })


app.get('/', function(req, res){
   res.sendFile(__dirname + "/index.html")
})

app.listen (port,function(){
    console.log ("démarage sur http://localhost" +port)
})
 app.get('/login', function(req,res){
    res.render('login') })

app.post('/login', urlencodedParser, function(req,res){
    console.log(req.body.mail)
    res.sendStatus(201)
})


