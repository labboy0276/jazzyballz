
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	  concat: {
	    js: {
	      src: ['sites/all/themes/jazzy/js/*.js'],
	      dest: 'sites/all/themes/jazzy/dist/js/built.js',
	    },
	    css: {
	    	src: ['sites/all/themes/jazzy/css/*.css'],
    		dest: 'sites/all/themes/jazzy/dist/css/built.css',
	    }
	  },

	  uglify: {
    	js: {
        src: 'sites/all/themes/jazzy/dist/js/built.js',
        dest: 'sites/all/themes/jazzy/dist/js/built.min.js'
    }
	 },

	 cssmin: {
	  css:{
	    src: 'sites/all/themes/jazzy/dist/css/built.css',
	    dest: 'sites/all/themes/jazzy/dist/css/built.min.css'
	  }
  },

  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
