// 因为webpage不能对css进行单独打包
const gulp = require("gulp");
const sass = require("gulp-sass"); // sass > css
const minifyCSS = require("gulp-minify-css"); // 压缩

gulp.task("sass", async function () {
  return gulp
    .src("components/css/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest("dist/css"));
});
