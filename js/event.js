$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $("#save").click(function() {
    	if ($("#star").hasClass("glyphicon-star-empty")) {
    		$("#star").removeClass("glyphicon-star-empty");
    		$("#star").addClass("glyphicon-star");
    	}
    	else {
    		$("#star").removeClass("glyphicon-star");
    		$("#star").addClass("glyphicon-star-empty");
    	}
    });

	/*$("#categories input:checkbox").change(function() {
	    checkFilters();
	});

	$("#skills input:checkbox").change(function() {
    	checkFilters();
	});

	$(".datepicker").change(function() {
		checkFilters();
	});*/
});