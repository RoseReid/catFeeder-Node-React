const express = require('express')
const app = express()
const path = require('path');


app.use('/', express.static(__dirname +  '/public'));

app.post('/feed', function(req, res){
	console.log("Elinore and Zelda are princesses that have foods")
	res.send("foods report post")
});


app.listen(3000, function () {
  console.log('catserver working')
})