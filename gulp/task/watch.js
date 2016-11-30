/**
 * Created by guminji on 16/11/28.
 */
var gulp = require('gulp');
gulp.task('cssWatch',function(){
    gulp.watch('./public/less/*.less',['css'])
        .on('change',function(){
            console.log('css has changed');
        })
})
gulp.task('jsWatch',function(){
    gulp.watch('./public/js/**/*.js',['js'])
        .on('change',function(){
            console.log('js has changed');
        })
})
gulp.task('watch',function(){
    gulp.start('cssWatch','jsWatch')
})