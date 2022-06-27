const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canva size is limit in default - 300 x 150

//style
// ctx.fillStyle = "#000";

/*
 * Drawing rectangle
 */
// ctx.fillRect(25, 25, 200, 200)
// ctx.clearRect(50, 50, 100, 100);
// ctx.strokeRect(70, 70, 100, 100);

/*
 * Drawing fill triangle
 */
// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(130, 80);
// ctx.lineTo(130, 20);
// ctx.fill();

/*
 * Drawing stroke triangle
 */
// ctx.beginPath();
// ctx.moveTo(100, 200);
// ctx.lineTo(150, 180);
// ctx.lineTo(150, 220);
// ctx.closePath(); // close the path is for stroke - to close the triangle
// ctx.stroke();

/*
 * drawing fill arc
 */
// ctx.beginPath();
// ctx.arc(10, 10, 10, 0, Math.PI * 2, false);
// ctx.fill();

/*
 * drawing stroke arc
 */
// ctx.beginPath();
// ctx.arc(100, 100, 10, 0, Math.PI * 1.5, false);
// ctx.stroke();

/*
 *using path2d to draw a circle and rectangle
 */
// const rectangle = new Path2D();
// rectangle.rect(10, 10, 50, 50);

// const circle = new Path2D();
// circle.moveTo(125, 35);
// circle.arc(100, 35, 25, 0, 2 * Math.PI);

// ctx.stroke(circle)
// ctx.fill(rectangle)

/*
 * fillrect to creat boxees
 */
// for (let i = 0; i < 6; i++){
//     for (let j = 0; j < 6; j++){
//         console.log(1- 0.16*i)
//         ctx.fillStyle = `rgba(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${255 - 42.5 * j}, ${1- 0.16*i} )`
//         ctx.fillRect(i* 25, j*25, 20, 20)
//     }
// }

/*
 *  Transparency using globalalpha value
 */
// ctx.fillStyle = "#FD0";
// ctx.fillRect(10, 10, 75, 75);
// ctx.fillStyle = "#6C0";
// ctx.fillRect(85, 10, 75, 75);
// ctx.fillStyle = "#09F";
// ctx.fillRect(10, 85, 75, 75);
// ctx.fillStyle = "#F30";
// ctx.fillRect(85, 85, 75, 75);

// ctx.fillStyle = "#FFF";

// // transparency
// ctx.globalAlpha = 0.2;

// for (let i = 0; i < 10; i++) {
//   ctx.beginPath();
//   ctx.arc(80, 80, 10 + 10 * i, 0, Math.PI * 2, false);
//   ctx.fill();
// }

/*
 *  Transparency using rgba value
 */

// ctx.fillStyle = "#FD0";
// ctx.fillRect(0, 20, 250, 60);
// ctx.fillStyle = "#6C0";
// ctx.fillRect(0, 80, 250, 60);
// ctx.fillStyle = "#09F";
// ctx.fillRect(0, 140, 250, 60);
// ctx.fillStyle = "#F30";
// ctx.fillRect(0, 200, 250, 60);

// for (let y = 0; y < 4; y++){
//     for (let x = 0; x < 10; x++){
//         ctx.fillStyle = 'rgba(255, 255, 255, ' + (x + 1) / 10 + ')'
//         ctx.fillRect(x * 25, 20 + y * 60, 25, 60 )
//     }
// }

/*
 * drawing line - line width - default 1
 */
// ctx.fillStyle = '#000'

// for (let x = 0; x < 6; x++){
//     ctx.lineWidth = 1 + x * 1
//     ctx.beginPath();
//     ctx.moveTo(20 + 10 * x, 10)
//     ctx.lineTo(20 + 10 * x, 250)
//     ctx.stroke()
// }

/*
 * drawing line - line width - default 1
 */
// ctx.fillStyle = '#000'
// caps = ['butt', 'round', 'square']

// for (let x = 0; x < 3; x++){
//     ctx.lineWidth = 20
//     ctx.lineCap = caps[x]
//     ctx.beginPath();
//     ctx.moveTo(20 + 40 * x, 10)
//     ctx.lineTo(20 + 40 * x, 250)
//     ctx.stroke()
// }

/*
* drawing line - line join 
round -> rounded
bevel - a little bit straight 
miter - normal
*/
// const lineJoin = ['round', 'bevel', 'miter'];
// ctx.lineWidth = 10;

// ctx.lineJoin = lineJoin[0]
// ctx.beginPath();
// ctx.moveTo(0, 40)
// ctx.lineTo(100, 40)
// ctx.lineTo(100, 100)
// ctx.stroke()

// drawing dash lines
// let offset = 0;

// const draw = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.setLineDash([4, 2]);
//   ctx.lineDashOffset = offset;
//   ctx.strokeRect(10, 10, 200, 200);
// };

// const march = () => {
//   offset++;
//   if (offset > 16) {
//     offset = 0;
//   }
//   draw();
//   setTimeout(march, 20);
// };

// march();

/*
 * gradient
 */

// lindear gradient
// const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
// lingrad.addColorStop(0, '#00ABEB')
// lingrad.addColorStop(0.5, '#fff')
// // lingrad.addColorStop(0.5, '#26C000')
// lingrad.addColorStop(1, '#000')

// // ctx.fillStyle = lingrad
// ctx.strokeStyle = lingrad

// // ctx.fillRect(10, 10, 100, 100)
// ctx.strokeRect(10, 10, 100, 100)

//radial gradient
// const radgrad = ctx.createRadialGradient(60, 60, 5, 70, 80, 100);
// radgrad.addColorStop(0, "#A7D30C");
// radgrad.addColorStop(0.9, "#019F62");
// radgrad.addColorStop(1, "rgba(1,159,98,0)");

// ctx.fillStyle = radgrad;
// ctx.fillRect(0, 0, 200, 200);

//conic gradient
// const conicGrad1 = ctx.createConicGradient(3, 45, 45);
// conicGrad1.addColorStop(0, "#A7D30C");
// conicGrad1.addColorStop(1, "#fff");

// ctx.fillStyle = conicGrad1;
// ctx.fillRect(137, 25, 100, 100);

/*
 * pattern
 */
// const img = new Image();
// img.src = "https://source.unsplash.com/random/150x150";

// img.onload = function () {
//   const ptrn = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = ptrn;
//   ctx.fillRect(0, 0, 200, 200);
// };

//shadow
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2;
// ctx.shadowBlur = 2;
// ctx.shadowColor = "rgba(0,0,0,0.5)";

// ctx.font = '20px Times New Roman';
// ctx.fillStyle = 'Black';
// ctx.fillText('Sample String', 5, 30)

/*
 * drawing text
 */
ctx.font = "28px Times New Roman";
// ctx.textAlign = 'start'
// ctx.textBaseline = 'bottom'
ctx.direction = "ltr";
// ctx.fillStyle = 'Black';
// ctx.fillText('Example', 20, 50)
ctx.strokeStyle = "Black";
ctx.strokeText("Example is enough", 20, 50);

const text = ctx.measureText("foo");
console.log(text.width);
