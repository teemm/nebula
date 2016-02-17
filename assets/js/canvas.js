 function animate(elementId, endPercent, color) {
     var canvas = document.getElementById(elementId);
     var context = canvas.getContext('2d');
     var x = canvas.width / 2;
     var y = canvas.height / 2;
     var radius = 35;
     var curPerc = 0;
     var counterClockwise = false;
     var circ = Math.PI * 2;
     var quart = Math.PI / 2;
    
     context.lineWidth = 6;
     context.strokeStyle = color;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
    
     function render(current) {
         context.clearRect(0, 0, canvas.width, canvas.height);
         context.beginPath();
         context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
         context.stroke();
         curPerc++;
         if (curPerc < endPercent) {
             requestAnimationFrame(function () {
                 render(curPerc / 100);
             });
         }
     }
     render();
 }
var progresTemp = parseInt($('#myCanvas1,#myCanvas10,#myCanvas20,#myCanvas30').attr('data-progresTemp'));
var progresTemp10 = parseInt($('#myCanvas10').attr('data-progresTemp10'));
var progresTemp20 = parseInt($('#myCanvas20').attr('data-progresTemp20'));
var progresTemp30 = parseInt($('#myCanvas30').attr('data-progresTemp30'));

animate('myCanvas1', progresTemp , '#9ccc65');
animate('myCanvas10', progresTemp10 , '#9ccc65');
animate('myCanvas20', progresTemp20 , '#9ccc65');
animate('myCanvas30', progresTemp30 , '#9ccc65');