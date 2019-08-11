var concat = require('gulp-concat');
module.exports.task = function (gulp, plugins, paths) {

    return function app_themes(done) {
        // For each theme file
        plugins.glob.sync(paths.app.themes).forEach(function (filePath) {

            // Prepend file to styles glob
            let src = [].concat(config.srcDir + '/themes/_rootmixin.scss');
            src.unshift(filePath);

            // Theme name
            let name = plugins.path.basename(filePath, '.scss').replace("base16-", "");

            gulp.src(src)
                .pipe(plugins.concat(name))
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
                .pipe(plugins.cleancss())
                .pipe(gulp.dest(config.destDir + '/css/themes'))
                .pipe(plugins.connect.reload());

        });
        var sources = gulp.src(config.destDir + '/css/themes/*.css', {read: false});


        plugins.util.log('loading the index.html file now');
        gulp.src(config.destDir + '/index.html')
            .pipe(plugins.inject(sources, {
                    transform: function (filepath) {
                        return '<link rel="alternate stylesheet" type="text/css" href="' + 'css/themes/' + plugins.path.basename(filepath) + '" title="' + plugins.path.basename(filepath, '.css') + '"/>';
                    }
                }
            ))
            .pipe(gulp.dest(config.destDir));

        done();
    };


};

module.exports.deps = ['app-styles', 'app-pages'];
