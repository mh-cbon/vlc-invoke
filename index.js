
var registry = require('windows-no-runnable').registry;
var proc = require('child_process');

function invokeVlc (args, opts, then) {
  var child;

  if (typeof(opts) == 'function' && !then) {
      then = opts;
      opts = {};
  }

  if (process.platform === 'win32') {

    if(!args.isArray) throw 'args must be an Array of Strings on windows'

    if (process.arch === 'x64') {
      try {
        key = registry('HKLM/Software/Wow6432Node/VideoLAN/VLC')
        if (!key['InstallDir']) {
          throw new Error('no install dir')
        }
      } catch (e) {
        try {
          key = registry('HKLM/Software/VideoLAN/VLC')
        } catch (err) {}
      }
    } else {
      try {
        key = registry('HKLM/Software/VideoLAN/VLC')
      } catch (err) {
        try {
          key = registry('HKLM/Software/Wow6432Node/VideoLAN/VLC')
        } catch (e) {}
      }
    }

    if (key) {
      var vlcPath = key['InstallDir'].value + path.sep + 'vlc'
      child = proc.execFile(vlcPath, args, opts, then)
    }

  } else if(process.platform === 'darwin'){
    var root = '/Applications/VLC.app/Contents/MacOS/VLC';
    var home = (process.env.HOME || '') + root;
    var cmd = 'vlc ' + args + ' ' + localHref +
    ' || ' + root + ' ' + args + ' ' + localHref +
    ' || ' + home + ' ' + args + ' ' + localHref;
    child = proc.exec(cmd, opts, then)

  } else {
    child = proc.exec('vlc ' + args, opts, then)
  }

  return child;
}

module.exports = invokeVlc
