
var spawnVlc = require('./index.js')

// windows compat
process.platform === 'win32' && spawnVlc(['--version'], printResults);

// linux / darwin compat
process.platform !== 'win32' && spawnVlc('--version', printResults);

function printResults (error, stdout, stderr) {
  console.log("error\n%j\n", error)
  console.log("stdout\n%s\n", stdout)
  console.log("stderr\n%s\n", stderr)
}
