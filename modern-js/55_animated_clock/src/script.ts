interface ClockTheme {
  faceColor: string;
  borderColor: string;
  linesColor: string;
  bigHandleColor: string;
  smallHandleColor: string;
}

let theme: ClockTheme = {
  faceColor: '#f4f4f4',
  borderColor: '#800000',
  linesColor: '#000000',
  bigHandleColor: '#800000',
  smallHandleColor: '#FF7F50'
};

const formElement = document.querySelector('form') as HTMLFormElement;
formElement.addEventListener('input', (evt) => {
  if (!(evt.target instanceof HTMLInputElement)) {
    return;
  }

  const sourceId: string = evt.target.id;
  const sourceValue: string = evt.target.value;
  console.log(sourceId, sourceValue);

  switch (sourceId) {
    case 'face-color':
      theme.faceColor = sourceValue;
      break;
    case 'border-color':
      theme.borderColor = sourceValue;
      break;
    case 'line-color':
      theme.linesColor = sourceValue;
      break;
    case 'large-hand-color':
      theme.bigHandleColor = sourceValue;
      break;
    case 'second-hand-color':
      theme.smallHandleColor = sourceValue;
      break;
  }
});
formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'canvas-image.png';
  link.click();
});

const clock = () => {
  const now = new Date();
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;

  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2));
  ctx.rotate(-Math.PI / 2);

  ctx.strokeStyle = theme.linesColor;
  ctx.fillStyle = theme.faceColor;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  ctx.save();
  ctx.lineWidth = 14;
  ctx.strokeStyle = theme.borderColor;
  ctx.beginPath();
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
    ctx.rotate(Math.PI / 6);
  }
  ctx.restore();

  ctx.save();
  ctx.lineWidth = 1;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(115, 0);
      ctx.lineTo(122, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = theme.bigHandleColor;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = theme.bigHandleColor;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = theme.smallHandleColor;
  ctx.fillStyle = theme.smallHandleColor;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore();

  requestAnimationFrame(clock);
};

requestAnimationFrame(clock);