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
        ts:{
            default:{
                tsconfig:'./tsconfig.json'
            }
        },
        typedoc: {
            build: {
                options: {
                    module: 'commonjs',
                    out: './docs',
                    name: 'my-project',
                    target: 'ES5'
                },
                src: ['./src/**/*']
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
        },
        typedoc: {
            build: {
                options: {
                    module: 'commonjs',
                    out: './docs',
                    name: 'my-project',
                    target: 'ES5'
                },
                src: ['./src/**/*']
            }
        }
    });

    grunt.loadNpmTasks('@vamship/grunt-typedoc');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less','ts','typedoc','watch']);
};