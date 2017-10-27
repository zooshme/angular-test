const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const watch = require('gulp-watch');
const nib = require('nib');
const jeet = require('jeet');
const webpack = require('webpack-stream');
const path = require('path');

gulp.task('stylus', function() {
  return gulp.src('./src/stylesheets/styles.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [nib(), jeet()]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
});

// gulp.task('stylus:build', function() {
//   return gulp.src('./src/stylesheets/styles.styl')
//     .pipe(plumber())
//     .pipe(stylus({
//       use: [nib(), jeet()]
//     }))
//     .pipe(cleanCSS())
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('./assets/css'));
// });

gulp.task('webpack', function() {
  return gulp.src('./src/javascript/main.js')
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function(done) {
  watch('./src/stylesheets/**/*.styl', gulp.task('stylus'));
  watch('./src/javascript/**/*.{js,html}', gulp.task('webpack'));
  done();
});

gulp.task('build', gulp.series(['stylus', 'webpack']));

gulp.task('default', gulp.series(['stylus', 'webpack', 'watch']));
