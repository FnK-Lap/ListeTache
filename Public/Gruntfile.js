module.exports = function (grunt){
	// Config projet
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				'indent': 4,
				'undef': true,
				'quotmark': 'single',
				'curly': true,
				'eqnull': true,
				'eqeqeq': true
			},
			all: {
				src:['js/**.js', '*,js']
			}
		},
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            prod: {
                files: {
                    'app/sass/app.min.css': ['app/sass/style.css']
                }
            }
        },
        sass: {
            prod: {
                files: {
                    'app/sass/style.css' : 'sass/*.scss'
                }
            }
        },
        uglify: {
            prod: {
                files: {
                    'app/js/app.min.js': ['app/js/*.js']
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            script: {
                files: '**/*.js',
                tasks: ['jshint']
            }
        }
	});
	// Load NPM Task
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// register task
	grunt.registerTask('default', [
		'jshint',
		'sass',
        'watch',
        'uglify',
        'cssmin',

	]);
}