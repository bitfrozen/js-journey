const area = document.getElementById('my-canvas');
const ctx = area.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 1.5);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 3;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.font = '60px serif';
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'magenta';
ctx.lineWidth = 1;
ctx.fillText('Hello World', 200, 100, 300);
ctx.strokeText('Hello World', 200, 160, 300);

const drawImage = () => {
  ctx.drawImage(image, 250, 250, 100, 100);
};
const image = document.querySelector('img');
if (image.complete) {
  drawImage();
} else {
  image.addEventListener('load', (evt) => drawImage());
}

let startTime;
let done = false;
const step = (timestamp) => {
  if (startTime === undefined) {
    startTime = timestamp;
  }

  const elapsed = timestamp - startTime;
  const duration = 5000; // Total duration of the animation
  const amplitude = 100 * ((duration - elapsed) / 2000); // Decelerating amplitude over time
  const frequency = 0.006; // Determines the speed of the oscillation
  if (elapsed < duration) {
    requestAnimationFrame(step);
  }

  // Using Math.sin to create a smooth up and down motion
  const y = amplitude * -Math.abs(Math.sin(frequency * elapsed));
  const rotation = (elapsed / 10) % 360; // To keep the rotation going
  image.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
};
requestAnimationFrame(step);
