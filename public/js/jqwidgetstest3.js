function livegraph (server,chartID,chartTitle,serieName,did,tid,tz,unitinterval) {
    var data = [];
    //url:'http://'+server+'.splashmonitoring.com//getv2data/get_raw_data_last_60_test?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1&minimumdataexpected=2&maxhoursrollback=6'
    $.ajax({
        url:'/getv2data/get_raw_data_last_60_test?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1&minimumdataexpected=2&maxhoursrollback=6'
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
                unitInterval: unitinterval,
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
        if (data.length > 60)
            data.splice(0, 1);
        //url:'http://'+server+'.splashmonitoring.com//getv2data/getcurrentdatapertidwithlimit?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
        $.ajax({
            url:'/getv2data/getcurrentdatapertidwithlimit?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
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


function livegraph2 (updatingtime,server,chartID,chartTitle,serieName,did,tid,tz,minvalue,maxvalue) {
    var data = [];
    //url:'http://'+server+'.splashmonitoring.com/getv2data/get_raw_data_last_60_test?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1&minimumdataexpected=2&maxhoursrollback=2'
    $.ajax({
        url:'/getv2data/get_raw_data_last_60_test?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1&minimumdataexpected=2&maxhoursrollback=2'
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
                unitInterval: 30,
                //unitInterval: empty for now,
                formatFunction: function (value) {
                    return $.jqx.dataFormat.formatdate(value, "HH:mm:ss", 'en-us');
                },
                // gridLines: { step: 10 },
                valuesOnTicks: true,
                labels: { angle: -45, offset: { x: -17, y: 0} }
            },
            colorScheme: 'scheme03',
            seriesGroups:
                [
                    {
                        type: 'spline',
                        // columnsGapPercent: 10,
                        alignEndPointsWithIntervals: true,
                        valueAxis:
                        {
                            // minValue: minvalue,
                            // maxValue: maxvalue,
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
        if (data.length > 60)
            data.splice(0, 1);
        //url:'http://'+server+'.splashmonitoring.com/getv2data/getcurrentdatapertidwithlimit_live?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
        $.ajax({
            url:'/getv2data/getcurrentdatapertidwithlimit_live?did='+did+'&tid='+tid+'&tz='+tz+'&limit=1'
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
        
    }, updatingtime*1000);
}

