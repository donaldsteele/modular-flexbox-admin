module.exports.task = function (gulp, plugins, paths) {
    return function vendor_scripts() {
        return gulp.src(paths.vendor.scripts)
            .pipe(plugins.concat('vendor.js'))
            .pipe(plugins.terser())
            .pipe(gulp.dest(config.destDir + "/js"));
        //.pipe(plugins.connect.reload());
    };
};
