module.exports = function(grunt) {
	grunt.initConfig({

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/scss/',
					src: ['*.scss'],
					dest: 'dist/styles/',
					ext: '.css'
				}]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'dist/styles/',
					src: ['*.css', '!*.min.css',],
					dest: 'dist/styles/',
					ext: '.min.css'
				}]
			}
		},

		watch: {
			options: {
				livereload: true
			},
			styles: { 
				files: ['src/scss/*.scss', 'src/scss/*/*.scss', 'src/blocks/*/*.scss'],
				tasks: ['compilecss']
			},
			scripts: { 
				files: ['src/js/*.js'],
				tasks: ['compilejs']
			},
			indexfile: {
				files: ['dist/index.html'],
				tasks: ['compilecss']
			}
		},

		uglify: {
			dist: {
				options: {
					banner: 'Created by Dmytro Bevz | 2016'
				},
				dist: {
					files: {
						'dist/js/main.min.js': ['src/js/main.js']
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('compilecss', ['sass', 'cssmin']);
	grunt.registerTask('compilejs', ['uglify']);
	grunt.registerTask('default', ['compilecss', 'compilejs', 'watch']);
};
