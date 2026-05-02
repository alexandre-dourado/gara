const frames = [
  "frame_0.png",
  "frame_1.png",
  "frame_2.png",
  "frame_3.png",
  "frame_4.png",
  "frame_5.png",
  "frame_6.png"
];

let currentFrame = 3;

const imgA = document.getElementById("imgA");
const imgB = document.getElementById("imgB");

let showingA = true;
let isSwitching = false;

function getFrameFromX(x) {
  if (x < 0.15) return 0;
  if (x < 0.3) return 1;
  if (x < 0.45) return 2;
  if (x < 0.55) return 3;
  if (x < 0.7) return 4;
  if (x < 0.85) return 5;
  return 6;
}

function switchFrame(newFrame) {
  if (newFrame === currentFrame || isSwitching) return;

  isSwitching = true;

  const nextSrc = frames[newFrame];

  if (showingA) {
    imgB.src = nextSrc;
    imgB.classList.add("active");
    imgA.classList.remove("active");
  } else {
    imgA.src = nextSrc;
    imgA.classList.add("active");
    imgB.classList.remove("active");
  }

  showingA = !showingA;
  currentFrame = newFrame;

  setTimeout(() => {
    isSwitching = false;
  }, 150);
}

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const targetFrame = getFrameFromX(x);
  switchFrame(targetFrame);
});