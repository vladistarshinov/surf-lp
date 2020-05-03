const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    webpack = require('webpack-stream'),
    autoprefixer = require('gulp-autoprefixer');

    const dist = "dist/";

gulp.task('clean', async function(){
  del.sync('dist')
})

gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scss', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/animate.css/animate.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css'
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('src/scss'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(browserSync.reload({stream: true}))
});  

gulp.task("build-js", function() {
  return gulp.src("./src/js/main.js")
              .pipe(webpack({
                  mode: 'development',
                  output: {
                      filename: 'js/script.js'
                  },
                  watch: false,
                  devtool: "source-map",
                  module: {
                      rules: [
                        {
                          test: /\.m?js$/,
                          exclude: /(node_modules|bower_components)/,
                          use: {
                            loader: 'babel-loader',
                            options: {
                              presets: [['@babel/preset-env', {
                                  debug: true,
                                  corejs: 3,
                                  useBuiltIns: "usage"
                              }]]
                            }
                          }
                        }
                      ]
                    }
              }))
              .pipe(gulp.dest(dist))
              .on("end", browserSync.reload);
});

gulp.task("build-prod-js", function() {
  return gulp.src("./src/js/main.js")
              .pipe(webpack({
                  mode: 'production',
                  output: {
                      filename: 'js/script.js'
                  },
                  module: {
                      rules: [
                        {
                          test: /\.m?js$/,
                          exclude: /(node_modules|bower_components)/,
                          use: {
                            loader: 'babel-loader',
                            options: {
                              presets: [['@babel/preset-env', {
                                  corejs: 3,
                                  useBuiltIns: "usage"
                              }]]
                            }
                          }
                        }
                      ]
                    }
              }))
              .pipe(gulp.dest(dist));
});

gulp.task('img-compress', function() {
	return gulp.src('src/img/**/*') 
    .pipe(imagemin())
		.pipe(gulp.dest('dist/img')) 
});


gulp.task('export', function(){
  let buildHtml = gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));

  let BuildCss = gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'));
    
  let BuildFonts = gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

  let BuildImg = gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'));   

  let BuildPhp = gulp.src('src/php/**/*.php')
    .pipe(gulp.dest('dist/php')); 
});


gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "dist/"
      }
  });
});

gulp.task('watch', function(){

  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('src/pug/pages/*.pug', gulp.parallel('pug'));
  gulp.watch('src/pug/*.pug', gulp.parallel('pug'));
  gulp.watch('src/*.html', gulp.parallel('html'));
  gulp.watch("src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task('build', gulp.series('css' ,'scss', 'pug', 'build-js', 'export'));

gulp.task('default', gulp.parallel('browser-sync', 'watch', 'build'));