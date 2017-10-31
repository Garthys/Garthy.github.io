const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass'); //Incase of sass files in future



/*
  TOP LEVEL FUNCTIONS
  gulp.task: defines our task
  gulp.src: point to the file to run
  gulp.dest: points to the folder to send gulped files to.
  gulp.watch: take note of chaneges in files and folders.
*/


gulp.task('copyHTML', function(){
	gulp.src('src/*.html')
	  .pipe(gulp.dest(''))
});

gulp.task('minify', function(){
	gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js'))
});

gulp.task('imgMin', function(){
	gulp.src('src/images/*.jpg')
	 .pipe(imageMin())
	 	.pipe(gulp.dest('images'))
});

gulp.task('minPng', function(){
	gulp.src('src/images/*.png')
	 .pipe(imageMin())
	 	.pipe(gulp.dest('images'))
});

gulp.task('minGif', function(){
	gulp.src('src/images/*.gif')
	 .pipe(imageMin())
	 	.pipe(gulp.dest('images'))
});

gulp.task('copyCSS', function(){
	gulp.src('src/*.css')
	   .pipe(gulp.dest('css'))
});

gulp.task('default',  ['copyHTML', 'minify', 'imgMin', 'minPng', 'minGif', 'sass']);

gulp.task('watch', function(){
    gulp.watch('src/*.html', ['copyHTML']);
    gulp.watch('src/js*.js', ['minify']);
    gulp.watch('src/css*.css', ['copyCSS']);
    gulp.watch('src/images/*.jpg', ['imageMin']);
    gulp.watch('src/images/*.png', ['imageMin']);
    gulp.watch('src/images/*.gif', ['imageMin']);
});