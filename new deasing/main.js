let videoPlayer = document.getElementById('videoPlayer')
let myVideo = document.getElementById('myVideo')
let myImage = document.getElementById('myImage')


function stopVideo(){
    videoPlayer.style.display = 'none'
}


function playVideo(file){
    myVideo.src=file;
    videoPlayer.style.display ="block"
    myImage.style.display="none"
}