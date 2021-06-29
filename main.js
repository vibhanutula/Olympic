canvas = document.getElementById("Olympic");
ctx = canvas.getContext("2d");

function Draw(){
    var ctx = canvas.getContext('2d'); 

    var X = 230;
    var Y = 200;
    var R = 300;
    ctx.beginPath();
    lineWidth = 5;
    ctx.rect(X, Y, R, 150);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'grey';
    ctx.stroke();
    
    var X = 280;
    var Y = 250;
    var R = 40;
    ctx.beginPath();
    lineWidth = 5;
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    var X = 370;
    var Y = 250;
    var R = 40;
    ctx.beginPath();
    lineWidth = 5;
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    var X = 460;
    var Y = 250;
    var R = 40;
    ctx.beginPath();
    lineWidth = 5;
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.stroke();

    var X = 415;
    var Y = 300;
    var R = 40;
    ctx.beginPath();
    lineWidth = 5;
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'green';
    ctx.stroke();

    var X = 328;
    var Y = 300;
    var R = 40;
    ctx.beginPath();
    lineWidth = 5;
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
}
