/*
    Count Songs Left in the Playlist
    You removed two songs from your playlist. Use the array length property to find out how many songs are left.

    const playlist = ['Roadtrip','Waves','Midnight Drive','Sunrise','Dream On'];
    playlist.pop(); // removes the last song
    playlist.shift(); // removes the first song
    
    // How many songs are left?
    let songsLeft = 
    
    console.log(songsLeft); // should print 3
*/

const playlist = ['Roadtrip','Waves','Midnight Drive','Sunrise','Dream On'];
playlist.pop(); // removes the last song
playlist.shift(); // removes the first song
 
let songsLeft = playlist.length
 
console.log(songsLeft); // should print 3
 