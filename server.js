const http = require('http');
const fs = require('fs');
const express = require('./config/express')();
const mongodb = require('./config/mongodb');

http.createServer(express).listen(3000, function(err){
  fs.writeFileSync('report.txt', 'Servidor iniciado em: ' + Date() + '\n', {flag: 'a'});
  console.log('Servidor conectado!');
});
