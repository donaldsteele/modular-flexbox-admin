module.exports.task = function (gulp, plugins, paths) {
    console.log('looking for app styles in ' + paths.app.styles);
    return function app_styles() {
        return gulp.src(paths.app.styles)
            .pipe(plugins.concat('app.scss'))
            .pipe(
                plugins.sass({
                    includePaths: [
                        plugins.path.resolve(config.srcDir),
                        plugins.path.resolve(config.npmDir),
                    ]
                })
                    .on('error', plugins.sass.logError)
            )
            .pipe(plugins.autoprefixer())
            // TODO minify
            .pipe(gulp.dest(config.destDir + '/css'))
            .pipe(plugins.connect.reload())
            .on('error', plugins.sass.logError);
    };
};
