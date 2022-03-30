var btnStartRecording = document.getElementById('start-Recording');
var btnPauseRecording = document.getElementById('pause-Recording');
var btnStopRecording = document.getElementById('stop-Recording');

btnStartRecording.onclick = startRecording;
btnStopRecording.onclick = stopRecording1;

let recorder;

function stopRecording1(){
    recorder.stopRecording(function(){
        let blob = recorder.getBlob();
        var url = window.URL.createObjectURL(blob);
        document.getElementById("my-audio").src = url;
        console.log(blob);
        // console.log(invokeSaveAsDialog(blob));
    })
}

function getStream(stream){
    recorder = RecordRTC(stream, {
        type: 'audio'
    });
}

function startRecording(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(async function(stream) {
        getStream(stream);
        recorder.startRecording();
    });
}


function pauseRecording1(){
    recorder.pauseRecording(
    );
}
function resumeRecording1(){
    recorder.resumeRecording(
    );
}

// function pauseRecording(){
//     recorder.stopRecording(function() {
//         let blob = recorder.getBlob();
//         var url = window.URL.createObjectURL(blob);
//         var btnStopRecording = document.getElementById('stop-Recording');
//         btnStopRecording.onclick = stopRecording1(url);
//         btnPauseRecording.innerHTML = "Resume Recording";
//         invokeSaveAsDialog(blob);
//     });
// }
// function playPause(){
//     btnPauseRecording = "Pause Recording" ? recorder.pauseRecording(function(){
//         btnPauseRecording.innerHTML = "Resume Recording";
//     }) : recorder.resumeRecording(function(){
//         btnPauseRecording.innerHTML = "Pause Recording";
//     });
//     // recorder.pauseRecording(function() {
//     //     btnPauseRecording.innerHTML = "Resume Recording";
//     //     invokeSaveAsDialog(blob);
//     // });
//     // recorder.resumeRecording(function(){
//     //     btnPauseRecording.innerHTML = "Pause Recording";
//     // });
// }


// $("#stop-Recording").click(function(){
//     var binary= convertDataURIToBinary(data);
//     var blob=new Blob([binary], {type : 'audio/ogg'});
//     var blobUrl = URL.createObjectURL(blob);
//     $('body').append('<br> Blob URL : <a href="'+blobUrl+'" target="_blank">'+blobUrl+'</a><br>');
//     $("#source").attr("src", blobUrl);
//     $("#my-audio")[0].pause();
//     $("#my-audio")[0].load();//suspends and restores all my-audio element
//     $("#my-audio")[0].oncanplaythrough =  $("#my-audio")[0].play();
//   });

