var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');


gulp.task('css', function () {
  var plugins = [
    autoprefixer,
    cssnext,
    precss,
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'))
})
