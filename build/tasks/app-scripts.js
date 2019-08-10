module.exports.task = function (gulp, plugins, paths) {
    return function app_scripts() {
        return gulp.src(paths.app.scripts)
            .pipe(plugins.concat('app.js'))
            .pipe(plugins.terser())
            .pipe(gulp.dest(config.destDir + '/js'))
            .pipe(plugins.connect.reload());
    };
};
