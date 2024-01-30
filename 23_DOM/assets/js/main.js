const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];
const playListContainer = document.getElementById('playList');
const playlistItemMaster = document.createElement('li');
playlistItemMaster.className = "list-group-item";
const authorMaster = document.createElement('strong');
const songMaster = document.createElement('span');
songMaster.className = "badge bg-primary rounded-pill";

Array.from(playList).forEach(item => {
    const playlistItem = playlistItemMaster.cloneNode();
    const author = authorMaster.cloneNode();
    const song = songMaster.cloneNode();
    author.innerText = `${item.author} - `;
    song.innerText = `${item.song}`;
    playlistItem.append(author);
    playlistItem.append(song);
    playListContainer.append(playlistItem);
})






