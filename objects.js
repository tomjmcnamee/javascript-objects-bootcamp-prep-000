var playlist = {}
playlist.Bruce = "Born to run"

function updatePlaylist(playlist, artistName, songTitle) {
   Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(obj, artist) {
  delete obj.artist;
  return obj;
}