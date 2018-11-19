'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

const autoprefixer = require('gulp-autoprefixer');
 
// SASS
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/scss/main.scss')
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

// TWIG
gulp.task('html', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src('src/twig/index.twig')
        .pipe(twig({
            data: {
                titlePage: 'NEF',
            }
        }))
        .pipe(gulp.dest('dist/'));
});

// SERVE
  gulp.task('server', function() {
    gulp.src('dist/')	// <-- your app folder
      .pipe(webserver({
        livereload: true,
        open: true,
      }));
  });

  gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/twig/**/*.twig', ['html']);
  });

  gulp.task('default', ['sass', 'watch','html', 'server']);