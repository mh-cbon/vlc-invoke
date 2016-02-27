# vlc-invoke
Ease vlc invokation accross multiple platforms, extracted from peerflix

# install

```
  npm i mh-cbon/vlc-invoke --save
```

# Usage

```js
var spawnVlc = require('@mh-cbon/vlc-invoke')

// windows compat
process.platform === 'win32' && spawnVlc(['--version'], printResults);

// linux / darwin compat
process.platform !== 'win32' && spawnVlc('--version', printResults);

function printResults (error, stdout, stderr) {
  console.log("error\n%j\n", error)
  console.log("stdout\n%s\n", stdout)
  console.log("stderr\n%s\n", stderr)
}

```

# Credits

Mafintosh for the initial code released within peerflix

# Read more
- https://github.com/mafintosh/peerflix
