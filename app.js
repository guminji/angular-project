/**
 * Created by guminji on 16/11/29.
 */
var express =require('express');
var path =require('path');
var http =require('http');
var app = express();
//var config =require('./config');
//console.log(config.getEnv()+'1');
//console.log(config.get('Env')+'1');
app.use('/angular',express.static(path.join(__dirname,'public/html')));
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/public/css',express.static(path.join(__dirname,'build/css')));
//app.use(require('./public/routes'))
//app.use('/public/build',express.static(path.join(__dirname,'public/build')));
//var http =require('http');
http.createServer(app).listen('3000');