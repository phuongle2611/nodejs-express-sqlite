$(document).ready(function() {
	var time = new Date();
	// console.log(time);
	var data = post('/settime',{'time':time.toString()}).done(function(res){
		console.log(res);
	});
});

/*
call ajax with insert extra stuff to the argument object
 */
function post(url,data_obj){
	var jqxhr = $.ajax({
		url: url,
		type: 'post',
		// dataType: 'xml',
		contentType: 'application/json',
		async: true,
		timeout: 1200000,
		data:JSON.stringify(data_obj)
	});
	return jqxhr;
}