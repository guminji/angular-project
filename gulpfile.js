/**
 * Created by guminji on 2016/11/10 0010.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var promise = require('bluebird');
var source = require('vinyl-source-stream')
var glob = require('glob');
var filePath = './public/js/*.js';
var rev =require('gulp-rev');
var revReplace = require('gulp-rev-replace');
require('./gulp/task');

//压缩前段js代码
gulp.task('js.bundle',function(res){
    return new Promise(function(resolve){
        glob(filePath,function(err,files){
        console.log(files)
            browserify({entries:files})
                .bundle()
                .pipe(source('bundle.js'))
                .pipe(gulp.dest('./public/build/js'))
                .on('end',function(){
                    resolve(true);
                });
    })})
    //gulp.src('./public/js/*.js').pipe(gulp.dest('./public/build'));
})
//为文件添加版本号
gulp.task('rev',['js.bundle'],function(){
    return gulp.src('./public/build/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('./build/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build'));
})
//修改js文件中的版本号
gulp.task('jsrev',function(){
    var manifest = gulp.src('./build/rev-manifest.json');
    gulp.src('./public/build/js/*.js')
        .pipe(revReplace({manifest:manifest}))
        .pipe(gulp.dest('./build/js'))
})
//修改html文件中的版本号
gulp.task('htmlrev',function(){
    var manifest = gulp.src('./build/rev-manifest.json');
    gulp.src('./public/html/*.html')
        .pipe(revReplace({manifest:manifest}))
        .pipe(gulp.dest('./build/html'))
})
//替换文件中的版本号
gulp.task('replace',['rev'],function(){
    var manifest = gulp.src('./build/rev-manifest.json');
    gulp.start('htmlrev','htmlrev')

})


