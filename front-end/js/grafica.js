setInterval(() => {
    $(document).ready(function() {
    
        $.ajax({
            url : "https://ihc-jamk.000webhostapp.com/backend/getStatusServo.php",
            dataType : "JSON",
            success : function(result) {
                google.charts.load('current', {
                    'packages' : [ 'corechart' ]
                });
                google.charts.setOnLoadCallback(function() {
                    drawChart(result);
                });
            }
        });
    
        function drawChart(result) {
    
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'id');
            data.addColumn('number', 'status');
            var dataArray = [];
            $.each(result, function(i, obj) {
                dataArray.push([ parseInt(obj.id), parseInt(obj.status) ]);
            });
            data.addRows(dataArray);

            var barchart_options = {
                title : 'Barchart: How Much Products Sold By Last Night',
                width : 800,
                height : 500,
                legend : 'none'
            };
            var barchart = new google.visualization.BarChart(document
                    .getElementById('barchart_div'));
            barchart.draw(data, barchart_options);
        }
    
    });
    
    },1000);