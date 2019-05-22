"use strict";

let gulp = require("gulp");
let server = require("browser-sync").create();


gulp.task("server", function () {
  server.init({
    server: "",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("**/*.*").on("change", server.reload);
});
