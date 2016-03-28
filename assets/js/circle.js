      function shuffle(o){ //v1.0
         for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
         return o;
      }

      var colors = [
         ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43'],['#F4BCBF', '#D43A43']
      ], circles = [];

      for (var i = 1; i <= 6; i++) {
         var child = document.getElementById('circles-' + i),
            percentage = 31.42 + (i * 9.84);

         circles.push(Circles.create({
            id:         child.id,
            value:      percentage,
            radius:     30,
            width:      5,
            colors:     colors[i - 1],
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke'
         }));
      }