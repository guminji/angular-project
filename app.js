/**
 * Created by guminji on 2016/11/10 0010.
 */
var express =require('express');
var path =require('path');
var http =require('http');
var app=express();
var config =require('./config');
console.log(config.getEnv()+'1');
console.log(config.get('Env')+'1');

app.use('/angular',express.static(path.join(__dirname,'build/html')));
app.use('/public/js',express.static(path.join(__dirname,'build/js')));
app.use('/public/build',express.static(path.join(__dirname,'public/build')));
//var http =require('http');

var swig = require('swig');
var app = express();
var config =require('./config');
console.log(config.getEnv()+'1');
console.log(config.get('Env')+'1');
app.engine()
app.use('/angular',express.static(path.join(__dirname,'build/html')));
app.use('/public/js',express.static(path.join(__dirname,'build/js')));
//app.use('/public/build',express.static(path.join(__dirname,'public/build')));

http.createServer(app).listen('3000');