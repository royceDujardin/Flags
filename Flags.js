var ctx = document
  .querySelector('canvas')
  .getContext('2d');

ctx.translate(0.5,0.5);
ctx.fillStyle = '#009246';
ctx.fillRect(0,0,40,80);
ctx.fillStyle = 'white';
ctx.fillRect(40,0,40,80);
ctx.fillStyle = '#CE2B37';
ctx.fillRect(80,0,40,80);
