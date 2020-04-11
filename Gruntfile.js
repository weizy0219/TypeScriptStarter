module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            development: {
                files: {
                    //TODO: This should be updated to accept multi files
                    "./dist/css/style.css": "./src/less/style.less" 
                  //编译的目标文件：源文件
                }
            }
        },
        watch: {
            styles: {
                files: ['src/less/**/*.less'], //watch功能要监控的文件
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};