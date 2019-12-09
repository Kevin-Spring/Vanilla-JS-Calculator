var gulp = require("gulp");
//var uglify = require("gulp-uglify");
var uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
let cleanCSS = require('gulp-clean-css');
var autoprefix = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var sass = require('gulp-sass');
//var uglify =require("gulp-uglify");
sass.compiler = require('node-sass');
 
var JS_PATH = "public/**/*.js";
 
const CSS_PATH = "public/scss/*.scss";
//styles
 
 
gulp.task("styles", async function () {
   console.log("styles is running");
   //return gulp.src(["public/scss/reset/reset.scss", CSS_PATH])
   return gulp.src(CSS_PATH)
       .pipe(plumber(function (err) {
           console.log("Styles error", err);
       }))
       /* .pipe(sourcemaps.init()) */
       .pipe(autoprefix())
       //  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
       .pipe(sass().on('error', sass.logError))
       .pipe(concat("styles.css"))
       .pipe(cleanCSS({compatibility: 'ie8'}))
       /* .pipe(sourcemaps.write("./maps")) */
       .pipe(gulp.dest("public/css"))
 
})
 
//scripts
gulp.task("scripts", async function () {
   return gulp.src(JS_PATH)
 
       .pipe(uglify())
       .on('error', function (err) { console.log(err) })
       .pipe(concat("app.js"))
 
       .pipe(gulp.dest("public/dist"))
 
 
})
 
//images
gulp.task("image", async function () {
   console.log("image task is running");
});
 
//default
gulp.task("default", async function () {
   console.log("default task is running");
})
 
//gulp watch
 
gulp.task("watch", async function () {
 
   gulp.watch(JS_PATH, gulp.series("scripts"))
   gulp.watch(CSS_PATH, gulp.series("styles"))
})
