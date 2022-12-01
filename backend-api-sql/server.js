const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const cors = require('cors')
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const password = '12345';

const con = new mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database: 'dbusuario'
})

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  })
);

app.get('/', (req,res) => {
  try{
    if(con){
      res.status(200).send('Conectado');
    }
  }catch(e){
    res.status(404).send(`Falha ao conectar. ${e.message}`);
  }
})

app.get('/dados', (req, res)=>{
  con.query('SELECT * FROM clientes',(err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).send(result);
  });
})

app.post('/login', (req, res, next) => {
    if(req.body.user === 'user' && req.body.pwd === '123'){
        const id = 1; 
        // const token = jwt.sign({ id }, password);
        const token = jwt.sign({ id }, process.env.SECRET);
        return res.json({ auth: true, token: token});
    }

    res.status(500).json({message: 'Invalid password or username.'});
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
