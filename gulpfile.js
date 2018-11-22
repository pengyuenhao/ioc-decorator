//引用插件模块
var gulp = require("gulp"),
	tsify = require("tsify"),
	concat = require("gulp-concat"),
	browserify = require("browserify"),
	minify = require("gulp-minify"),
	source = require("vinyl-source-stream"),
	sourcemaps = require('gulp-sourcemaps'),
	order = require("gulp-order"),
	ts = require("gulp-typescript"),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename')


//获取Node插件和工作路径
let workSpaceDir = ".";

gulp.task('default', function () {
	gulp.src("bin/debug/**/*.js")
		.pipe(order([
			"Stack.js",
			"IocConst.js",
			"Prototype.js",
			"Bind/Binding.js",
			"Bind/Binder.js",
			"Bind/BindConst.js",
			"Decorator/DecoratorClassBinding.js",
			"Decorator/DecoratorClassBinder.js",
			"Decorator/DecoratorConst.js",
			"Injector/InjectFactory.js",
			"Injector/Injector.js",
			"Injector/InjectBinding.js",
			"Injector/InjectBinder.js",
			"Injector/InjectDecorator.js",
			"Pool.js",
			"Command/ICommandBinder.js",
			"Command/CommandConst.js",
			"Command/CommandBinding.js",
			"Command/CommandBinder.js",
			"Command/Command.js",
			"Context/Context.js",
		]))
		.pipe(concat("ioc.js"))
		.pipe(gulp.dest("bin/release/"))
});

gulp.task("tsc", function () {
	var tsProject = ts.createProject('tsconfig.json');
	return gulp.src("src/**/*.ts")
		//初始化调试信息
		.pipe(sourcemaps.init())
		//编译工程
		.pipe(tsProject())
		//写入调试信息
		.pipe(sourcemaps.write())
		//输出到文件夹
		.pipe(gulp.dest("bin/debug"));
	//return tsResult.js.pipe(gulp.dest('bin/debug'));
});
//压缩代码工具
gulp.task('uglify', ['concat'], function(cb) {
    //获取文件索引
    return gulp.src('./lib/ioc.js')
    	//执行压缩
    	.pipe(uglify())
    	//重命名
    	.pipe(rename('ioc.min.js'))
    	//写入库文件夹
    	.pipe(gulp.dest('./lib/'), cb);
});
gulp.task("concat", ["tsc"], function (db) {
	return gulp.src("bin/debug/**/*.js")
		.pipe(order([
			"Stack.js",
			"IocConst.js",
			"Prototype.js",
			"Bind/Binding.js",
			"Bind/Binder.js",
			"Bind/BindConst.js",
			"Decorator/DecoratorClassBinding.js",
			"Decorator/DecoratorClassBinder.js",
			"Decorator/DecoratorConst.js",
			"Injector/InjectFactory.js",
			"Injector/Injector.js",
			"Injector/InjectBinding.js",
			"Injector/InjectBinder.js",
			"Injector/InjectDecorator.js",
			"Pool.js",
			"Command/ICommandBinder.js",
			"Command/CommandConst.js",
			"Command/CommandBinding.js",
			"Command/CommandBinder.js",
			"Command/Command.js",
			"Context/Context.js",
		]))
		.pipe(concat("ioc.js"))
		.pipe(gulp.dest("lib/"))
});