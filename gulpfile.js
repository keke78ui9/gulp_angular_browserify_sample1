/// setup gulp 

var gulp = require('gulp');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
//var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    })
});

gulp.task('browserify', function () {
    // Grabs the app.js file
    return browserify('./app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('app.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});


gulp.task("min:js", function () {

    gulp.src(["./public/js/app.js"], { base: "." })
    .pipe(ngAnnotate())
    .pipe(concat("./public/js/app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js"]);

// Views task
gulp.task('views', function () {

    // Any other view files from app/views
    gulp.src('./app/views/**/*')
    // Will be put in the dist/views folder
    .pipe(gulp.dest('./public/views/'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['browserify','views']);
});

gulp.task('default', ['browserify', 'views', 'min', 'watch','connect']);