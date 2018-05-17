$(document).ready(function () {
    // var test1 = livegraph ('dev2','#chartContainer1','Room Temperature','Room Temperature (\u00B0C)','12725','138869','Pacific/Auckland',300);
    // var test2 = livegraph ('dev2','#chartContainer2','Compressor Capacity','Compressor Capacity (%)','12725','138844','Pacific/Auckland',60);
    // var test3 = livegraph ('dev2','#chartContainer3','Evaporating temperature','Evaporating temperature (\u00B0C)','12725','138776','Pacific/Auckland',300);
    // var test4 = livegraph ('dev2','#chartContainer4','Condensing Temperature','Condensing Temperature (\u00B0C)','12725','138777','Pacific/Auckland',300);
    // var test5 = livegraph ('dev2','#chartContainer5','SSH','SSH (\u00B0C)','12725','138778','Pacific/Auckland',60);
    // var test6 = livegraph ('dev2','#chartContainer6','DSH','DSH (\u00B0C)','12725','138779','Pacific/Auckland',60);

    var test1 = livegraph2 (10,'dev2','#chartContainer1','Room Temperature','Room Temperature (\u00B0C)','12725','138869','Pacific/Auckland',0,40);
    var test2 = livegraph2 (10,'dev2','#chartContainer2','Compressor Capacity','Compressor Capacity (%)','12725','138844','Pacific/Auckland',0,100);
    var test3 = livegraph2 (10,'dev2','#chartContainer3','Evaporating temperature','Evaporating temperature (\u00B0C)','12725','138776','Pacific/Auckland',0,10);
    var test4 = livegraph2 (10,'dev2','#chartContainer4','Condensing Temperature','Condensing Temperature (\u00B0C)','12725','138777','Pacific/Auckland',0,50);
    var test5 = livegraph2 (10,'dev2','#chartContainer5','SSH','SSH (\u00B0C)','12725','138778','Pacific/Auckland',0,10);
    var test6 = livegraph2 (10,'dev2','#chartContainer6','DSH','DSH (\u00B0C)','12725','138779','Pacific/Auckland',0,50);


    // var test5 = livegraph ('dev2','#chartContainer5','LP','LP (kPa)','12725','138781','Pacific/Auckland',60);

    $("#accordion").accordion({
        animate: {
            duration: 500
        }
    });

    $('#section1').on('click', function(){
        $('#chartContainer1').jqxChart('update') ;
        $.scrollTo( $('#section1'), 500); // index start with 0
     });
    $('#section2').on('click', function(){
        $('#chartContainer2').jqxChart('update') ;
        $.scrollTo( $('#section2'), 500); // index start with 0
     });
    $('#section3').on('click', function(){
        $('#chartContainer3').jqxChart('update') ;
        $.scrollTo( $('#section3'), 500); // index start with 0
     });
    $('#section4').on('click', function(){
        $('#chartContainer4').jqxChart('update') ;
        $.scrollTo( $('#section4'), 500); // index start with 0
     });
    $('#section5').on('click', function(){
        $('#chartContainer5').jqxChart('update') ;
        $.scrollTo( $('#section5'), 500); // index start with 0
     });
    $('#section6').on('click', function(){
        $('#chartContainer6').jqxChart('update') ;
        $.scrollTo( $('#section6'), 500); // index start with 0
     });
    // $('button').on('click', function(){
    //     var current_index = $(this).parent().next('h3').index();
    //     if(current_index != -1) { // just checks if its the last
    //         $(this).parent().next('h3').trigger('click');
    //     } else {
    //         $('h3#section1').trigger('click');
    //     }

    // });
});