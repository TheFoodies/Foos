// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

var paths = {
  jsSource: ['public/app/**/*.js', '!/public/app/lib'],
  sassSource: ['public/app/**/*.sass', 'public/app/**/*.scss'],
  dependenciesSource: ['public/app/lib/**/*.js']
}

gulp.task('scripts', function () {
  return gulp.src(paths.jsSource)
  .pipe(babel())
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  // .pipe(uglify())
  .pipe(gulp.dest('./public'))
})

gulp.task('dependencies', function () {
  return gulp.src(paths.dependenciesSource)
  .pipe(babel())
  .pipe(concat('dependencies.js'))
  .pipe(annotate())
  // .pipe(uglify())
  .pipe(gulp.dest('./public'))
})


gulp.task('styles', function () {
  return gulp.src(paths.sassSource)
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', function () {
  gulp.watch(paths.jsSource, ['scripts']);
  gulp.watch(paths.dependenciesSource, ['dependencies']);
  gulp.watch(paths.sassSource, ['styles']);
})


gulp.task('default', ['watch', 'scripts', 'dependencies', 'styles'])
