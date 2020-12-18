var playlist = {
  artistName : "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle){
  return [playlist] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}
