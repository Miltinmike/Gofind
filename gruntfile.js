module.exports = function(grunt){
    grunt.initConfig({
        compass :{
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },//compass
        uglify :{
            options: {
                separator: ';',
            },
            my_target : {
                files : {
                    // "assets/js/library.js" : ['assets/components/js/library/boot.js','assets/components/js/library/mat.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                'assets/css/library.css':   [   'assets/components/sass/custom/bootstrap/bootstrap.scss',
                                                'assets/components/sass/custom/materialize.scss'
                                            ],
                'assets/css/styles.css': ['assets/components/sass/styles.scss']
                }
            }
        },
        watch: {
            src: {
              files: ['assets/components/js/library/*.js','assets/components/js/library/*.js', 'assets/components/sass/styles.scss','assets/components/sass/scss/*.scss'],
              tasks: ['default'],
            },
        },
        
    }); //initConfig

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat' );
    
    grunt.registerTask('default',['compass','uglify','sass','watch']);
}//exports