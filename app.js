/**
 * Created by guminji on 2016/11/10 0010.
 */
var express =require('express');
var path =require('path');
var app=express();

app.use('/angular',express.static(path.join(__dirname,'public/html')));
app.use('/public/js',express.static(path.join(__dirname,'public/js')));
app.use('/public/build',express.static(path.join(__dirname,'public/build')));
var http =require('http');
http.createServer(app).listen('3000');