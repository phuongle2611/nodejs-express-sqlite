var chart; // global

$(document).ready(function() {
    Highcharts.setOptions({
        global: {
            timezone: 'Pacific/Auckland'
        }
    });

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            defaultSeriesType: 'spline',
            events: {
                load: requestData
            }
        },
        title: {
            text: 'Compressor suction line temperature'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Values',
                margin: 10
            }
        },
        series: [{
            name: 'Compressor suction line temperature (\u00B0C)',
            data: []
        }]
    });
});


/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */
function requestData() {
    const website = 'http://dev2.splashmonitoring.com/';
    $.ajax({
        // url: 'http://temperzone.splashmonitoring.com/assets/temperzone/gauges/live-server-data.php',
        url:'/getv2data/getcurrentdatapertidwithlimit?did=12725&tid=138657&tz=Pacific/Auckland&limit=1',
        success: function(point) {
            var json = $.parseJSON(point);
            console.log(json);

            var series = chart.series[0],
                shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            var datalength = chart.series[0].data.length;
            var lastpoint = chart.series[0].data[datalength-1];
            if (typeof lastpoint !== 'undefined'){
                if (json[1]==lastpoint.y){
                    json[0] = json[0]+30000;
                }
            }

            // add the point
            chart.series[0].addPoint(json, true, shift);

            // call it again after one second
            setTimeout(requestData, 30000);    
        },
        cache: false
    });
}