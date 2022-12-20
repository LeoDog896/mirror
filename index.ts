const video = document.querySelector<HTMLVideoElement>("#videoElement")!;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch(() => {
      console.log("Something went wrong!");
    });
}