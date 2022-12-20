const video = document.querySelector<HTMLVideoElement>("#videoElement")!;
const hash = location.hash.substring(1)

if (hash === "mirror") {
    video.style.transform = "scaleX(-1)"
} else {
    video.style.transform = "scaleX(1)"
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch(() => {
      console.log("Something went wrong!");
    });
}