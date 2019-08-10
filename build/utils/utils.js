function loadTasks(gulp, plugins, paths) {
    let taskNames = [];

    // Load all tasks from tasks folder
    glob.sync(path.resolve(__dirname, '../tasks/*.js')).forEach(function (filePath) {
        let taskName = path.basename(filePath, '.js');
        taskNames.push(taskName);

        let task = require(filePath).task;
        let deps = require(filePath).deps || [];

        gulp.task(taskName, deps, function () {
            task(gulp, plugins, paths)
        });
    });


    return taskNames;
}

module.exports.loadTasks = loadTasks;
