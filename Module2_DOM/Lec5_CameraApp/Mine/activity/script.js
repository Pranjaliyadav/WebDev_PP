let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photo");
let zoomIn = document.querySelector("#in");
let zoomOut = document.querySelector("#out");
let recordingState =false;
let constraints = {video : true}; //you can add audio too
let mediaRecorder;
let recordedData;

let maxZoom = 3;
let minZoom = 1;
let currZoom = 1;


(async function(){

    try{
        let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        videoPlayer.srcObject = mediaStream;
        mediaRecorder = new MediaRecorder(mediaStream);
        //attaching functions to these events

        mediaRecorder.onstop = function(e){
            console.log("Inside on Stop");
            console.log(e);
        }

        mediaRecorder.onstart = function(e){
            console.log("Inside on start");
            console.log(e);
        }

        mediaRecorder.ondataavailable = function(e){
            console.log("Inside on data available");
            console.log(e.data);
            //let blob = new Blob(e.data , {"type" : " video/mp4"});
            recordedData = e.data;
            saveVideoToFs();
        }

        console.log(mediaRecorder);

        recordButton.addEventListener("click",function(){
            if(recordingState){
                //stopping the recording
                mediaRecorder.stop();
                recordButton.querySelector("div").classList.remove("record-animate");
            }

            else{
                //starting the recording
                mediaRecorder.start();
                recordButton.querySelector("div").classList.add("record-animate");

            }
            recordingState = !recordingState;
        });
        photoButton.addEventListener("click" , capturePhotos);

        zoomIn.addEventListener("click",function(){
            if(currZoom + 0.2 <= maxZoom){
                currZoom += 0.2;
                videoPlayer.style.transform = `scale(${currZoom})`;
            }
        });

        zoomOut.addEventListener("click" , function(){
            if(currZoom - 0.2 >= minZoom){
                currZoom -= 0.2;
                videoPlayer.style.transform = `scale(${currZoom})`;
            }
        });
    }
    catch(error){
        
    }
})();

function saveVideoToFs(){
    console.log("Saving Video");
    //file object in recordedData
    let videoURL = URL.createObjectURL(recordedData);
    console.log(videoURL);

    let aTag = document.createElement("a");
    aTag.download = "camerOn.mp4";
    aTag.href = videoURL;

    aTag.click();
    aTag.remove();
}


function capturePhotos(){

    photoButton.querySelector("div").classList.add("capture-animate");

    //async
    setTimeout(function(){
        photoButton.querySelector("div").classList.remove("capture-animate");

    }, 1000);

    let canvas = document.createElement("canvas");
    canvas.height = videoPlayer.videoHeight;
    canvas.width  = videoPlayer.videoWidth;
    let ctx = canvas.getContext("2d");


    //scaling canvas according to currZoom
    if(currZoom != 1){
        ctx.transform(canvas.width/2 , canvas.height/2); //sets the origin point
        ctx.scale(currZoom,currZoom);
        ctx.translate(-canvas.width/2,-canvas.height/2);
    }
    
    ctx.drawImage(videoPlayer,0,0);

    let imageURL = canvas.toDataURL("image/png");
    //canvas object => file url DOMstring

    let aTag = document.createElement("a");
    aTag.download = "camerOFF.png";
    aTag.href = imageURL;
    aTag.click();
}