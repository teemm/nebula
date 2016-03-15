  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "ყველა გამოცდა"  
      },
       axisY:{ 
      title: "ქულა",
    },
      data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2016, 02, 2), y: 36 },
        { x: new Date(2016, 02, 4), y: 47 },
        { x: new Date(2016, 02, 8), y: 39 },
        { x: new Date(2016, 02, 10), y: 36 },
        { x: new Date(2016, 02, 12), y: 47 },
        { x: new Date(2016, 02, 16), y: 39 },
        { x: new Date(2016, 02, 20), y: 36 },
        { x: new Date(2016, 02, 25), y: 47 },
        { x: new Date(2016, 03, 2), y: 50 },
        { x: new Date(2016, 03, 5), y: 40 },
        { x: new Date(2016, 03, 10), y: 32 },
        { x: new Date(2016, 03, 19), y: 58 },
      { x: new Date(2016, 03, 20), y: 74 },
      { x: new Date(2016, 03, 22), y: 52 },
      { x: new Date(2016, 03, 25), y: 24 },
      { x: new Date(2016, 03, 27), y: 65 },
        { x: new Date(2016, 04, 4), y: 52 },
        { x: new Date(2016, 04, 6), y: 75 },
        { x: new Date(2016, 04, 9), y: 64 },
        { x: new Date(2016, 04, 11), y: 20 },
      { x: new Date(2016, 04, 15), y: 68 },
        { x: new Date(2016, 04, 17), y: 77},
        { x: new Date(2016, 04, 25), y: 50},
        { x: new Date(2016, 04, 28), y: 20},
        ]
      }
      ]
    });

    chart.render();
  }