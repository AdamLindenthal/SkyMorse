// constants - durations in miliseconds

var tone = require('tonegenerator');
var header = require('waveheader');

module.exports = {
    toAudio: function (morse, freq, dot_duration) {
        var dot_duration = dot_duration || 60;
        var freq = freq || 440;
        var dash_duration = 3 * dot_duration;
        var whitespace_duration = 3 * dot_duration;
        var separator_duration = dot_duration;
        var samples = [];

        for (var i = 0, len = morse.length; i < len; i++) {
            if (morse[i] === ' ') {
                samples = samples.concat(tone(freq, whitespace_duration / 1000, -128));
            } else if (morse[i] === '.') {
                samples = samples.concat(tone(freq, dot_duration / 1000, tone.MAX_8));
                samples = samples.concat(tone(freq, separator_duration / 1000, -128));
            } else if (morse[i] === '-') {
                samples = samples.concat(tone(freq, dash_duration / 1000, tone.MAX_8));
                samples = samples.concat(tone(freq, separator_duration / 1000, -128));
            }
        }

        var data = Uint8Array.from(samples, function (val) {
            return val + 128;
        });

        if (Buffer.from) {
            buffer = Buffer.from(data)
        } else {
            buffer = new Buffer(data)
        }

        headerContent = header(samples.length, { bitDepth: 8 });
        resultBuf = Buffer.concat([headerContent, buffer]);
        return resultBuf;
    }
}


