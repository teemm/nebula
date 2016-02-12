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
animate('myCanvas1', 25 , '#9ccc65');
	// $('#myCanvas1').attr('progresTemp