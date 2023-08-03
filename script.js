console.log("Welcome to Atharvafy")


let songIndex = 0;
let AudioudioElement = new Audio('1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Maan-Meri-Jaan", filePath: "song/1.mp3.mp3", coverPath: "covers/1.jpg.jpg"},
]

let AudioElement = new Audio('1.mp3.mp3');


//Handel play/pause click  
masterPlay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to Events
AudioElement.addEventListener('timeupdate', ()=>{
    //Upate Seekbar
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    AudioElement.currentTime = myProgressBar.value * AudioElement.duration/100;
})




