(function(){
    'use strict';

    module.exports = function(grunt) {
        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        grunt.initConfig({
            watch:{
                options: {
                    livereload: true
                },
                app:{
                    files:['app/**/*.js', 'app/**/*.css', 'app/**/*.html']
                }
            }
        });
    };

})();