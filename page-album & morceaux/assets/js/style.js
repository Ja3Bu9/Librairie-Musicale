// #################### For Audio Podcast #################
var pButton = document.getElementsByClassName("playButton");

// Songs
var songs = ["/audio/1.mp3", "/audio/2.mp3"];

// Create Audio Object
var audio = new Audio();

// Set Source of Audio
audio.src = songs[0];

// Check Play Method
function checkPlay(){
    if (audio.paused){
        // play audio
        audio.play();

        // Set Audio Duration
        // startTime.innerHTML = audio.duration * 100;

        // Change To Play Button
        pButton[0].setAttribute("class","fa fa-pause")
        pButton[1].setAttribute("class","fa fa-pause")

            
        // For Check Working
        console.log("Audio Paused");
    }else{
        // Pause audio
        audio.pause();

        // Change To Play Button
        pButton.setAttribute("class","fa fa-play");


        // For Check Working
        console.log("Audio Played");
    }
}

// var music = new Audio();
// music.src = "/audio/1.mp3"


// function mulaiAudio(){
//     var play = document.querySelector('.playButton')

    

//     play.addEventListener('click', fplay);

//     function fplay(){
//         if(music.paused){
//             music.play();
//             play.style.background = "url(/icon/pause.png)"
//             play.style.border = "none"
//         }else{
//             music.pause();
//             play.style.background = "url(/icon/icons8-play-50.png)"
//             play.style.border = "none"
//         }
//     }
// }
// window.addEventListener('load' , mulaiAudio)