var sensorDataBySystem =
[
	{
		"systemID": "719",
		"systemTitle": "KFC Rolleston Kitchen (UC8)",
		"did":"12725",
		"tidstring":"138657,138776,138777,138778,138779,138652,138781,138782,138841,138840,138775,138844,138794,138795",
		"tz":"Pacific/Auckland",
		"sensorData": [{
			"source": "servertime",
			"title": "servertime",
			"unit": ""
		}, {
			"source": "sampletime",
			"title": "sampletime",
			"unit": ""
		}, {
			"source": "sm.St",
			"title": "sm.St",
			"unit": ""
		}, {
			"source": "LowTk_LT",
			"title": "LowTk_LT",
			"unit": ""
		}, {
			"source": "LowTk_UT",
			"title": "LowTk_UT",
			"tid":"139229",
			"unit": "\u00B0C"
		}, {
			"source": "UppTk_T",
			"tid":"139230",
			"title": "Up Tank Temp",
			"unit": "\u00B0C"
		}, {
			"source": "Ambient_T",
			"title": "Outdoor Ambient Temp",
			"tid":"138656",
			"unit": "\u00B0C"
		}, {
			"source": "Return_WT",
			"tid":"139231",
			"title": "Return Water Temp",
			"unit": "\u00B0C"
		}, {
			"source": "WPump_OV",
			"tid":"139232",
			"title": "WPump_OV",
			"unit": "on/off"
		}, {
			"source": "ElemRly_st",
			"tid":"139233",
			"title": "ElemRly_st",
			"unit": "on/off"
		}, {
			"source": "Alarm_st",
			"title": "Alarm Sensor",
			"tid":"139234",
			"unit": "on/off"
		}, {
			"source": "Return_WT_SP",
			"title": "Return Water Setpoint",
			"unit": ""
		}, {
			"source": "WPump_SV",
			"title": "WPump_SV",
			"unit": ""
		}, {
			"source": "PI_ctl_Kp",
			"title": "PI_ctl_Kp",
			"unit": ""
		}, {
			"source": "PI_ctl_Ti",
			"title": "PI_ctl_Ti",
			"unit": ""
		}, {
			"source": "LowTk_LT_Thr",
			"title": "LowTk_LT_Thr",
			"unit": ""
		}, {
			"source": "LowTk_LT_Band",
			"title": "LowTk_LT_Band",
			"unit": ""
		}, {
			"source": "LowTk_UT_Thr",
			"title": "LowTk_UT_Thr",
			"unit": ""
		}, {
			"source": "IUC-Supply_T",
			"tid":"139161",
			"title": "IUC-Supply_T",
			"unit": "\u00B0C"
		}, {
			"source": "Flow_1",
			"title": "Flow_1",
			"unit": ""
		}, {
			"source": "Flow_2",
			"title": "Flow_2",
			"unit": ""
		}, {
			"source": "Pulse_1",
			"title": "Pulse_1",
			"unit": ""
		}, {
			"source": "Prog_start_T",
			"title": "Prog_start_T",
			"unit": ""
		}]
	}

]

;

/*
poll update batch task
 */
function doUpdate(){
	do_update_all_system_in_one_batch();
	setInterval(function() {
		do_update_all_system_in_one_batch();
	}, 60000);
}

/*
load all systems and update all in once
using deferred array and callback once all loaded 
 */
function do_update_all_system_in_one_batch(){
	var deferreds = new Array();
	var all_system_data = new Array();
	for (var i = 0; i < sensorDataBySystem.length; i++) {
		deferreds.push(
	    	load_single_ajax(sensorDataBySystem[i].systemID,sensorDataBySystem[i].systemTitle,sensorDataBySystem[i].did,sensorDataBySystem[i].tidstring,sensorDataBySystem[i].tz).done(function(data){
	    		// console.log(arguments[2].extra);
	    		all_system_data.push({systemID:arguments[2].extra.systemID,systemTitle:arguments[2].extra.systemTitle,did:arguments[2].extra.did,tidstring:arguments[2].extra.tidstring,tz:arguments[2].extra.tz,data:data});
	    	})
	    );
	}

	$.when.apply($, deferreds).done(function(){
		updateView2(all_system_data);
		deferreds.length = 0;
		all_system_data.length = 0;
	});
}

/*
encapsulate call ajax per systemID
 */
function load_single_ajax(systemID,systemTitle,did,tidstring,tz){
	if (did==="NA"){
		var link = "http://splashmonitoring.com/system/" + systemID + "/flash/current.xml";
	}
	else{
		var link = "http://splashmonitoring.com/getv2data/getcurrentdatapertidstring_v2?did="+did+"&tid="+tidstring+"&tz="+tz;	
	}
	var data = callajax(link,{systemID:systemID,systemTitle:systemTitle,did:did,tidstring:tidstring,tz:tz});
	//var obj = {systemID:systemID,data:data};
	return data;
}

/*
call ajax with insert extra stuff to the argument object
 */
function callajax(url,extrastuff){
	var obj = null;
	var jqxhr = $.ajax({
		url: url,
		type: 'get',
		// dataType: 'xml',
		async: true,
		timeout: 1200000,
		beforeSend: function(jqxhr, settings){
			//jqxhr.url=settings.url
			jqxhr.extra=extrastuff
		}
	});
	return jqxhr;
}

function updateView2(data){
	$.each(data,function(i,v){
		var systemdata = JSON.parse(v.data);
		// console.log(v.data);
		$.each(systemdata,function(e,datapoint){
			// console.log(datapoint);
			switch (datapoint.tid){
				case '138781':
					if (typeof datapoint.v !== "undefined"){
						values.slp=datapoint.v.toFixed(1);
					}else{
						values.slp=0;
					}
					
					break;
				case '138782':
					if (typeof datapoint.v !== "undefined"){
						values.dlp=datapoint.v.toFixed(1);
					}else{
						values.dlp=0;
					}
					
					break;
				case '138776':
					if (typeof datapoint.v !== "undefined"){
						values.evapt=datapoint.v.toFixed(1);
					}else{
						values.evapt=0;
					}
					
					break;
				case '138777':
					if (typeof datapoint.v !== "undefined"){
						values.condt=datapoint.v.toFixed(1);
					}else{
						values.condt=0;
					}
					
					break;
				case '138652':
					if (typeof datapoint.v !== "undefined"){
						values.dlt=datapoint.v.toFixed(1);
					}else{
						values.dlt=0;
					}
					
					break;
				case '138657':
					if (typeof datapoint.v !== "undefined"){
						values.slt=datapoint.v.toFixed(1);
					}else{
						values.slt=0;
					}
					
					break;
				case '138778':
					if (typeof datapoint.v !== "undefined"){
						values.ssh=datapoint.v.toFixed(1);
					}else{
						values.ssh=0;
					}
					
					break;
				case '138779':
					if (typeof datapoint.v !== "undefined"){
						if (datapoint.v==0){
							values.dsh=0;
						}else{
							values.dsh=datapoint.v.toFixed(1);
						}
						
					}else{
						values.dsh=0;
					}
					
					break;
				case '138794':
					if (typeof datapoint.v !== "undefined"){
						if (datapoint.v==0){
							values.eev1=0;
						}else{
							values.eev1=datapoint.v.toFixed(1);
						}
						
					}else{
						values.eev1=0;
					}
					
					break;
				case '138795':
					if (typeof datapoint.v !== "undefined"){
						if (datapoint.v==0){
							values.eev2=0;
						}else{
							values.eev2=datapoint.v.toFixed(1);
						}
					}else{
						values.eev2=0;
					}

					break;
				case '138775':
					if (datapoint.v<=15){
						values.deice=datapoint.v.toFixed(1);
					}else{
						values.deice=16;
					}
					
					break;

				case '138841':
					values.indoorf=datapoint.v;
					break;
				case '138840':
					values.outdoorf=datapoint.v;
					break;
				case '138844':
					values.capacity=datapoint.v;
					break;
			}
		});
	});
}