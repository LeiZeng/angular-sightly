import gulp from 'gulp'
import config from '../config'
import jshint from 'gulp-jshint'

gulp.task('lint', () => {

  return gulp.src([config.scripts.src, '!app/js/templates.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
})
