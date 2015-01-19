var gulp = require('gulp'),
	path = require('path'),
	plugins = require('gulp-load-plugins')({
		config: path.join(__dirname, 'package.json')
	});

gulp.task('build', function() {
	var pkg = require('./bower.json');

	var header = ['/**',
		' * <%= pkg.name %>',
		' * <%= pkg.description %>',
		' * @version v<%= pkg.version %>',
		' * @link <%= pkg.homepage %>',
		' * @license <%= pkg.license %>',
		' */',
		'(function (angular) {',
		'	var window = {};',
		'',
		''].join('\n');

	var footer = [
		'',
		'})(angular);',
		''].join('\n');

	gulp.src([
		'bower_components/mousetrap/mousetrap.js',
		'src/before-plugins.js',
		'bower_components/mousetrap/plugins/pause/mousetrap-pause.js',
		'bower_components/mousetrap/plugins/bind-dictionary/mousetrap-bind-dictionary.js',
		'src/angular-mousetrap-service.js'
	])
	.pipe(plugins.concat('angular-mousetrap-service.js'))
	.pipe(plugins.header(header, {pkg: pkg}))
	.pipe(plugins.footer(footer))
	.pipe(gulp.dest('./release/'))
	.pipe(plugins.uglify())
	.pipe(plugins.concat('angular-mousetrap-service.min.js'))
	.pipe(gulp.dest('./release/'));
});
