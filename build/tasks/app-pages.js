let nunjucksRender = require('gulp-nunjucks-render');

function getDataForFile(file) {
    let datafile = plugins.path.join(plugins.path.dirname(file.path), plugins.path.basename(file.path, '.njx')) + '.json';
    let data = plugins.fs.readFileSync(datafile);
    console.log("data file " + datafile);
    console.log("data consists of " + data);
    let dataobj = JSON.parse(data.toString());
    console.log("dataobj consists of " + dataobj);
    return dataobj;

}

module.exports.task = function (gulp, plugins, paths) {
    return function app_pages() {
        return gulp.src(paths.app.pages)
            .pipe(plugins.data(getDataForFile))
            .pipe(nunjucksRender({
                path: [paths.app.partials, paths.app.layouts]
            }))
            .pipe(plugins.rename(function (path) {
                path.basename = path.basename.replace("-page", "");
                path.extname = ".html"
            }))
            .pipe(gulp.dest(config.destDir))
    };
};

/*

return JSON.parse(plugins.data((plugins.fs.readFileSync(plugins.path.join(plugins.path.dirname(file.path) , plugins.path.basename(file.path,'.njx')) + '.json'))));
 */