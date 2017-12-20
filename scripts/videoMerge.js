var ffmpeg = require('fluent-ffmpeg');
var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

var firstFile = "../inputs/one.mp4";
var secondFile = "../inputs/two.mp4";

var outPath = "../outputs/out.mp4";

var files = ['../inputs/one.mp4', '../inputs/two.mp4'];



var proc = ffmpeg();

files.forEach(function(fileName) {
	proc = proc.addInput(fileName);
});


proc
	//.input(fourthFile)
	//.input(...)
	.on('end', function () {
		console.log('files have been merged succesfully: ' + ffmpegPath);
	})
	.on('error', function (err) {
		console.log('an error happened: ' + err.message);
	})
	.mergeToFile(outPath);