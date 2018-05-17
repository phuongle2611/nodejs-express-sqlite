function livegraph (server,chartID,chartTitle,serieName,did,tid,tz) {
    var data = [];
    $.ajax({
        url:'http://'+server+'.splashmonitoring.com//getv2data/get_raw_data_last_60?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
    }).done(function(valuestring){
        var value = $.parseJSON(valuestring);
        $.each(value,function(index,val){
            var timestamp3 = moment(val.timestamp); //safari dont understand date time string so use moment js to convert to javascript date object
            var timestamp2 = timestamp3.toDate();
            // var timestamp2 = new Date(val.timestamp); //this not work in safari
            data.push({ timestamp: new Date(timestamp2.valueOf()) , value: val.value });
        });
        data = data.reverse();
        // prepare jqxChart settings
        var settings = {
            title: chartTitle,
            description: " ",
            enableAnimations: false,
            animationDuration: 1000,
            enableAxisTextAnimation: true,
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            source: data,
            xAxis:
            {
                dataField: 'timestamp',
                type: 'date',
                baseUnit: 'second',
                unitInterval: 60,
                formatFunction: function (value) {
                    return $.jqx.dataFormat.formatdate(value, "HH:mm:ss", 'en-us');
                },
                gridLines: { step: 10 },
                valuesOnTicks: true,
                labels: { angle: -45, offset: { x: -17, y: 0} }
            },
            colorScheme: 'scheme03',
            seriesGroups:
                [
                    {
                        type: 'spline',
                        columnsGapPercent: 50,
                        alignEndPointsWithIntervals: true,
                        valueAxis:
                        {
                            // minValue: 0,
                            // maxValue: 12,
                            title: { text: 'Value' }
                        },
                        series: [
                                { dataField: 'value', displayText: serieName, opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
                            ]
                    }
                ]
        };
        // create the chart
        $(chartID).jqxChart(settings);
        // get the chart's instance
        var chart = $(chartID).jqxChart('getInstance');
    });

    // auto update timer
    var ttimer = setInterval(function () {
        if (data.length >= 60)
            data.splice(0, 1);
        $.ajax({
            url:'http://'+server+'.splashmonitoring.com//getv2data/getcurrentdatapertidwithlimit?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
        }).done(function(valuestring){
            var value = $.parseJSON(valuestring);
            // var timestamp = new Date();
            // timestamp.setSeconds(timestamp.getSeconds());
            // timestamp.setMilliseconds(0);
            var timestamp = moment.unix(value[0]/1000);
            timestamp = timestamp.toDate();
            // console.log(timestamp);
            data.push({ timestamp: new Date(timestamp.valueOf()), value: value[1] });
            $(chartID).jqxChart('update') ;
        });
        
    }, 30000);
}



function livedonut (server,chartID,chartTitle,serieName,did,tid,tz) {
    var needleGradient = {
                type: 'linearGradient',
                x0: 0,
                y0: 0.5,
                x1: 1,
                y1: 0.5,
                r1:1,
                colorStops: [{ offset: 0, color: '#4F6169' },
                             { offset: 1, color: '#252E32'}]
            };


    var metrics = [{
        name:serieName,
        value:0,
        max:100,
    }];
    $.ajax({
        url:'http://'+server+'.splashmonitoring.com//getv2data/getcurrentdatapertidwithlimit?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
    }).done(function(valuestring){
        var value = $.parseJSON(valuestring);
        metrics[0].value = value[1];
        var data = [];
        data.push({ text: 'Capacity %', value: metrics[0].value }); // current
        data.push({ text: '', value: metrics[0].max - metrics[0].value }); // remaining
        // prepare jqxChart settings
        var settings = {
            title: '',
            description: '',
            enableAnimations: false,
            showLegend: false,
            showBorderLine: false,
            backgroundColor: '#f5f5f5',
            padding: { left: 0, top: 0, right: 0, bottom: 0 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
            source: data,
            showToolTips: true,
            seriesGroups:
            [
                {
                    type: 'donut',
                    useGradientColors: false,
                    series:
                        [
                            {
                                showLabels: false,
                                enableSelection: false,
                                displayText: 'text',
                                dataField: 'value',
                                labelRadius: 120,
                                initialAngle: 90,
                                radius: 60,
                                innerRadius: 40,
                                centerOffset: 0,
                            }
                        ]
                }
            ]
        };
        var valueText = metrics[0].value.toString();
        if (valueText==0){
            valueText="OFF";
        }else{
            valueText = valueText+'%';
        }
        var titletext = metrics[0].name;
        settings.drawBefore = function (renderer, rect) {
            console.log(renderer);
            sz = renderer.measureText(valueText, 0, { 'class': 'chart-inner-text' });
            renderer.text(
            valueText,
            rect.x + (rect.width - sz.width) / 2,
            rect.y + rect.height / 1.8,
            0,
            0,
            0,
            { 'class': 'chart-inner-text' }
            );

            tz = renderer.measureText(titletext, 0,{'class': 'jqx-chart-title-text'});
            renderer.text(
            titletext,
            rect.x + (rect.width - tz.width) / 2,
            rect.y + rect.height / 2.5,
            0,
            0,
            0,
            { 'class': 'jqx-chart-title-text' }
            );
        }
        // create the chart
        $(chartID).jqxChart(settings);
        // get the chart's instance
        $(chartID).jqxChart('addColorScheme', 'customColorScheme', ['#00BAFF', '#EDE6E7','#FFF','#000']);
        $(chartID).jqxChart({ colorScheme: 'customColorScheme' });

        var schemeColors = $(chartID).jqxChart('getColorScheme', 'customColorScheme');
        // console.log(schemeColors);
    });

    // auto update timer
    var ttimer = setInterval(function () {
        $.ajax({
            url:'http://'+server+'.splashmonitoring.com//getv2data/getcurrentdatapertidwithlimit?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
        }).done(function(valuestring){
            var value = $.parseJSON(valuestring);
            metrics[0].value = value[1];
            var data = [];
            data.push({ text: 'Capacity %', value: metrics[0].value }); // current
            data.push({ text: '', value: metrics[0].max - metrics[0].value }); // remaining
            $(chartID).jqxChart('update') ;
        });
    }, 30000);
}
