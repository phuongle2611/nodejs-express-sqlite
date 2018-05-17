$(document).ready(function () {
    var test1 = livegraph ('dev2','#chartContainer1','Compressor suction line temperature','Compressor suction line temperature (\u00B0C)','12725','138657','Pacific/Auckland');
    var test2 = livegraph ('dev2','#chartContainer2','De-Ice sensor temperature','De-Ice sensor temperature (\u00B0C)','12725','138775','Pacific/Auckland');
    var test3 = livegraph ('dev2','#chartContainer3','SSH','SSH (\u00B0C)','12725','138778','Pacific/Auckland');
    var test4 = livegraph ('dev2','#chartContainer4','DSH','DSH (\u00B0C)','12725','138779','Pacific/Auckland');
    var test5 = livegraph ('dev2','#chartContainer5','LP','LP (kPa)','12725','138781','Pacific/Auckland');

    var test6 = livedonut ('dev2','#donut1','DSH','1','12725','138844','Pacific/Auckland');
     var test7 = livedonut ('dev2','#donut2','DSH','2','12725','138844','Pacific/Auckland');
      var test8 = livedonut ('dev2','#donut3','DSH','3','12725','138844','Pacific/Auckland');
       var test9 = livedonut ('dev2','#donut4','DSH','4','12725','138844','Pacific/Auckland');

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
    // $('button').on('click', function(){
    //     var current_index = $(this).parent().next('h3').index();
    //     if(current_index != -1) { // just checks if its the last
    //         $(this).parent().next('h3').trigger('click');
    //     } else {
    //         $('h3#section1').trigger('click');
    //     }

    // });
});