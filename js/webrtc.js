let localStream;
let peer;

async function startCall(){

localStream = await navigator.mediaDevices.getUserMedia({
video:true,
audio:true
});

document.getElementById("localVideo").srcObject = localStream;

peer = new RTCPeerConnection({
iceServers: ICE_SERVERS
});

localStream.getTracks().forEach(track=>{
peer.addTrack(track,localStream);
});

peer.ontrack = e=>{
document.getElementById("remoteVideo").srcObject = e.streams[0];
};

}

function endCall(){

if(peer){
peer.close();
peer=null;
}

if(localStream){
localStream.getTracks().forEach(t=>t.stop());
}

document.getElementById("localVideo").srcObject=null;
document.getElementById("remoteVideo").srcObject=null;

}