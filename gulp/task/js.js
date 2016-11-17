/**
 * Created by guminji on 2016/11/15 0015.
 */
var gulp =require('gulp');
var Promise = require('bluebird');
gulp.task('build',function(){
    return new Promise(function(resolve){
        gulp.src('./public/js/*.js')
        .pipe(gulp.dest('./public/build'))
        .on('end',function(){
            resolve(true);
        })
    })
    //gulp.src('./public/js/*.js').pipe(gulp.dest('./public/build'))
})