var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")

});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Play Video");
		video.pause()
});
document.querySelector('#slower').addEventListener("click", function(){
	console.log("Slower the Video");
	video.playbackRate = 0.5;
	console.log("New speed-rate:", vid.playbackRate)
});
document.querySelector('#faster').addEventListener("click", function(){
	console.log("Speed-up the Video");
	video.playbackRate = 2.0;
	document.querySelector("#volume").innerHTML =  video.volume *100 + "%"
});
document.querySelector('#skip').addEventListener("click", function(){
	{
		var vid = document.querySelector("video");
		var vidDuration = Math.floor(vid.duration);
		var skipAmount = 10;
		var skipTime = Math.min(vidDuration, vid.currentTime + skipAmount);
		skipToTime(skipTime);
	}
});
function skipToTime(time){
	var vid = document.querySelector("video");
	vid.currentTime = time;
}





