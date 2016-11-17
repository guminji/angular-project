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
gulp.task('rev',['js.bundle'],function(){
    return gulp.src('./public/bulid/*js')
        .pipe(rev())
        .pipe(gulp.dest('./build'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build'));
})
gulp.task('replace',['rev'],function(){
    var manifest = gulp.src('./build/rev-manifest.json');
    gulp.src('./build/*.js')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('./build'));

})


