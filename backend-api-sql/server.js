const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const cors = require('cors')

const con = new mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database: 'dbusuarios'
})

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  })
);

app.get('/con', (req,res) => {
  try{
    if(con){
      res.status(200).send('Conectado');
    }
  }catch(e){
    res.status(404).send(`Falha ao conectar. ${e.message}`);
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dados', (req, res)=>{
  con.query('SELECT * FROM clientes',(err, result) => {
    if(err) {
      throw err;
    }
    res.status(200).send(result);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
