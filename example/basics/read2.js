var Readable = require('stream').Readable;
var rs = Readable();

var count = 0;
var c = 97 - 1;

rs._read = function () {
		count++;
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);
    
    setTimeout(function () {
        rs.push(String.fromCharCode(++c));
    }, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() called ' + count + ' times');
});
process.stdout.on('error', process.exit);
