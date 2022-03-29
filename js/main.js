      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(dibujadona);
      function dibujadona() {
        var data2 = google.visualization.arrayToDataTable([
          ['Tarea', 'Horas por día'],
          ['Trabajo',     11],
          ['Comida',      2],
          ['Viajar',  2],
          ['Ver TV', 2],
          ['Dormir',    7]
        ]);

        var options2 = {
          title: 'Mis Actividades diarias',
          'width':400,
           'height':400,
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data2, options2);
      }
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Mes', 'Bolivia', 'Ecuador', 'Honduras', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Producción mensual de café por país',
          'width':600,
          'height':350,
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('barras'));
        chart.draw(data, options);
      }
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(velas);

  function velas() {
    var data3 = google.visualization.arrayToDataTable([
      ['Lun', 20, 28, 38, 45],
      ['Mar', 31, 38, 55, 66],
      ['Mier', 50, 55, 77, 80],
      ['Jue', 77, 77, 66, 50],
      ['Vier', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);

    var options3 = {
    title: 'Días de la semana',
      'width':400,
      'height':350
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('velas'));

    chart.draw(data3, options3);
  }


    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(gantt);

    function gantt() {

      var data4 = new google.visualization.DataTable();
      data4.addColumn('string', 'Task ID');
      data4.addColumn('string', 'Task Name');
      data4.addColumn('string', 'Resource');
      data4.addColumn('date', 'Start Date');
      data4.addColumn('date', 'End Date');
      data4.addColumn('number', 'Duration');
      data4.addColumn('number', 'Percent Complete');
      data4.addColumn('string', 'Dependencies');

      data4.addRows([
        ['2014Spring', 'Spring 2014', 'spring',
         new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
        ['2014Summer', 'Summer 2014', 'summer',
         new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
        ['2014Autumn', 'Autumn 2014', 'autumn',
         new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
        ['2014Winter', 'Winter 2014', 'winter',
         new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
        ['2015Spring', 'Spring 2015', 'spring',
         new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
        ['2015Summer', 'Summer 2015', 'summer',
         new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
        ['2015Autumn', 'Autumn 2015', 'autumn',
         new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
        ['2015Winter', 'Winter 2015', 'winter',
         new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
        ['Football', 'Football Season', 'sports',
         new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
        ['Baseball', 'Baseball Season', 'sports',
         new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
        ['Basketball', 'Basketball Season', 'sports',
         new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
        ['Hockey', 'Hockey Season', 'sports',
         new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
      ]);

      var options4 = {
        height: 400,
        gantt: {
          trackHeight: 30
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('gra4'));

      chart.draw(data4, options4);
    }

      //google.charts.load('current', {'packages':['corechart']});

      google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(organigrama);

      function organigrama() {
        var data6 = new google.visualization.DataTable();
        data6.addColumn('string', 'Name');
        data6.addColumn('string', 'Manager');
        data6.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data6.addRows([
          [{'v':'Mike', 'f':'Mike<div style="color:red; font-style:italic">Presidente</div>'},
           '', 'The President'],
          [{'v':'Jim', 'f':'Jim<div style="color:red; font-style:italic">Vice President</div>'},
           'Mike', 'VP'],
          ['Alice', 'Mike', ''],
          ['Bob', 'Jim', 'Bob Sponge'],
          ['Carol', 'Bob', '']
        ]);
       

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('organigrama'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data6, {'allowHtml':true});
      }


      google.charts.setOnLoadCallback(area);
      function area() {
        var data5 = google.visualization.arrayToDataTable([
          ['Año', 'TI', 'Sistemas'],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options5 = {
          title: 'Representación de dos funciones en una empresa',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          'width':600,
          'height':400
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area'));
        chart.draw(data5, options5);
      }
 
