const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res)  {
  res.send('GET,future work: connect with database and READ data')
})
app.post('/', function (req, res) {
  res.send('POST,future work: connect with database and CREATE data')  
})
app.put('/', function (req, res) {
  res.send('PUT,future work: connect with database and UPDATE data')
})
app.delete('/', function (req, res) {
  res.send('DELETE,future work: connect with database and DELETE data')
})

app.post('/item',function(req,res){
  var a=12,b=14

  res.json(a+b)
})
app.get('/userData',function(req,res){
  res.json({"result":[{
    "name":"safwan",
    "Age" : 19,
    "isMarried":false,
    "hobbies":["football","sketching","working out"],
    "address":{
        "line1":" hno1211212",
        "pincode": "231",
        "city":"hyd" 
    }
},
{
    "name":"shafaaat",
    "Age" : 19,
    "isMarried":false,
    "hobbies":["football","sketching","working out"],
    "address":{
        "line1":" hno1211212",
        "pincode": "231",
        "city":"hyd" 
}}]
})
})

app.post('/', function (req, res) {
  res.send('POST,future work: connect with database and CREATE data')  
})
app.post('/', function (req, res) {
  res.send('POST,future work: connect with database and CREATE data')  
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
