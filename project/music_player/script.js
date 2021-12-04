// VALIDATION FOR THE MUSIC PLAYER

let musicPlayer = document.querySelector('#music-section')
let track = document.querySelector('.track-name')
let artistName = document.querySelector('.track-artist')
let nowPlaying = document.querySelector('.details marquee');

track.textContent = "Birthday Girl";
artistName.textContent = "Chris brown";

console.log(nowPlaying);
nowPlaying.style.marginTop = '8px';
nowPlaying.style.marginBottom = '8px';


//      M.PLAYER SLIDE

let left = document.querySelector('#left');
let right = document.querySelector('#right');


left.addEventListener('click', slideLeft);

function slideLeft(){
//    musicPlayer.style.display ='block';
}


let slideHolder = document.querySelector('#music-section');

let sliderArray = document.querySelectorAll('.player-two');


let index = 0

for ( slider of sliderArray){
    slider.classList.add('disabled')
}

sliderArray[index].classList.remove('disabled')


function next(){
    index--
    console.log('clicked')
    
    if(index < 0)
        index = sliderArray.length - 1
    
    for( slider of sliderArray)
        slider.classList.add('disabled')
    
    sliderArray[index].classList.remove('disabled')
}

left.onclick = next

right.onclick = function(){
    index++
    
    if(index > sliderArray.length -1)
        index = 0
    
    for( slider of sliderArray)
        slider.classList.add('disabled')

    sliderArray[index].classList.remove('disabled')
}


//          LYRICS LINKING
let lyricsLink = document.querySelector('#lyrics-hold');
let lyrics = document.querySelector('#lyrics');
// let pT = document.querySelector('p');

lyricsLink.addEventListener('click', showLyrics);
function showLyrics(){
    // lyrics.style.opacity = "1";
    lyrics.style.opacity = '1';
    
}

// //          LYRICS LINKING 2
// let lyricsLink2 = document.querySelector('.lyrics-hold-two');
// let lyrics2 = document.querySelector('.lyrics-two');

// lyricsLink2.addEventListener('click', showLyrics);
// function showLyrics(){
//     lyrics2.style.opacity = "1";
    
// }


// //          LYRICS LINKING 2
// let lyricsLink3 = document.querySelector('.lyrics-hold-three');
// let lyrics3 = document.querySelector('.lyrics-three');

// lyricsLink3.addEventListener('click', showLyrics);
// function showLyrics(){
//     lyrics3.style.opacity = "1";
    
// }




