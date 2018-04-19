var Transform = require('stream').Transform;

var ts = Transform();
ts._transform = function(chunk, enc, next) {
  var data = chunk.toString();
  data = data.toUpperCase();
  this.push(data); // send the transformed data on its way
  next();
}

process.on('exit', function() {
  console.error('\nYou cut me off!');
});
process.stdout.on('error', process.exit);

process.stdin.pipe(ts).pipe(process.stdout);
