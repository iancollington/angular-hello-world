module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		build: {
			version: grunt.option("staticVersion") || Date.now(),
			target: {
				built: "target/dist"
			}
		},
		watch: {
			files: [
				'app/**/*.js'
			],
			tasks: ['uglify']
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'app/vendor/angular.js',
					'app/module.js',
				],
				dest: '<%= build.target.built %>/js/<%= pkg.name %>.js'
			}
		},
		copy: {
			built: {
				files: [
					{ "src": "app/index.html", "dest": "<%= build.target.built %>/index.html" },
					{ "src": "app/vendor/bootstrap.min.css", "dest": "<%= build.target.built %>/css/bootstrap.min.css" },
					{ "src": "app/vendor/bootstrap-theme.min.css", "dest": "<%= build.target.built %>/css/bootstrap-theme.min.css" }
				]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['uglify', 'copy']);
};
