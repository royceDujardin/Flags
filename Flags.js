var ctx = document
  .querySelector('canvas')
  .getContext('2d');

ctx.translate(0.5,0.5);
ctx.fillStyle = '#009246';
ctx.fillRect(0,0,160,320);
ctx.fillStyle = 'white';
ctx.fillRect(160,0,160,320);
ctx.fillStyle = '#CE2B37';
ctx.fillRect(320,0,160,320);
