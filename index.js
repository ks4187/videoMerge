var ffmpeg = require('fluent-ffmpeg');
var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffprobePath = require('@ffprobe-installer/ffprobe').path;

//Set up paths for the executable
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const inputString = 'one two three four';
const inputPath = './inputs/';
const outputPath = './outputs/';
const videoExtension = '.mp4';

var words = inputString.split(' ');
var outputFileName = inputString.split(' ').join('');
var mergeVideo = ffmpeg();

words.forEach(word => {
    mergeVideo.addInput(inputPath + word + videoExtension);
});

mergeVideo
    .on('end', function () {
        console.log('files have been merged succesfully');
    })
    .on('error', function (err) {
        console.log('an error happened: ' + err.message);
    })
    .mergeToFile(outputPath + outputFileName + videoExtension);