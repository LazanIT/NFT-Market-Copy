const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("custom-css/**/*.scss")
    .pipe(sass())
    .pipe(dest("css"))
    .pipe(purgecss({ content: ["*.html"] }));
}

function watchTask() {
  watch(["custom-css/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
