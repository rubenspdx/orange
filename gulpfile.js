const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('sass', function(){
  return gulp.src('./public/stylesheets/import.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function(){
  gulp.watch('./public/stylesheets/import.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
