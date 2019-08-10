let rootDir = plugins.path.resolve("../");					// Root dir
let srcDir = plugins.path.resolve("../src");				// Source files
let destDir = plugins.path.resolve("./dist");				// Build destination
let npmDir = plugins.path.resolve("../node_modules");		// Npm dir

let config = {
    rootDir: rootDir,
    srcDir: srcDir,
    destDir: destDir,
    npmDir: npmDir,
    port: 4000,
    paths: {}
};

// Vendor libs paths
config.paths.vendor = {
    scripts: [
        npmDir + '/jquery/dist/jquery.js',
    ],
    styles: [
        npmDir + '/font-awesome/fonts/*.css'
    ],
    fonts: [
        npmDir + '/font-awesome/fonts/*'
    ],
    assets: [],
};

// Application Paths
config.paths.app = {
    scripts: [
        srcDir + "/js/_app.js",
        srcDir + "/js/**/!(app|_variables)*.js"

    ],
    styles: [
        srcDir + "/pages/**/_app.scss",
        srcDir + "/**/!(_main|_variables|*-theme)*.sass",
    ],
    themes: srcDir + "/themes/base*.scss",
    partials: srcDir + "/pages/templates/partials",
    pages: srcDir + "/pages/**/*-page.njx",
    layouts: srcDir + "/pages/templates/layouts",
    assets: srcDir + "/assets/**/*"
};


module.exports = config;
