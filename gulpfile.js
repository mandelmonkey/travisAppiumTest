/******* Imports ********/
var gulp = require('gulp'),
    _ = require('underscore'),
    plugins = {
        exec: require('child_process').exec,
        spawn: require('child_process').spawn,
        path: require('path'),
        fs: require('fs'),
        _: _,
        moment: require('moment'),
        utils: _.extend(require('gulp-util')),
        xml2js: require('xml2js'),
        cloudinary: require('cloudinary')
    },
    GULP_DIR = './.gulp';
plugins.utils.env.config = JSON.parse(plugins.fs.readFileSync(plugins.path.join(process.cwd(), 'app', 'config.json')));  

/** Require all tasks defined in several gulpfiles **/
var gulpfiles = plugins.fs.readdirSync(GULP_DIR);
const fs = require('fs')

  
_.each(gulpfiles, function (gulpfile) {
    var path = GULP_DIR + '/' + gulpfile ;

    try {
        if (fs.existsSync(path)) {
          //file exists
          console.log("file exists");
        }
      } catch(err) {
        console.error(err)
      }
    console.log("gulp file is ", gulpfile);
    console.log("gulp file should be",GULP_DIR + '/' + gulpfile );
    require( path )(gulp, plugins);
});