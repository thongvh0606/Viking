/*============FIRST LOADING============*/
$(window).load(function() {
	$(".loader").fadeOut("slow");
});
/*============END FIRST LOADING============*/
/*============DataTable============*/
$(document).ready(function(){
	var table = $('#staffTable').DataTable({
    
		/*Number of entries in table*/
		"lengthMenu": [[5, 10, 15, 20, -1], [5, 10, 15, 20, "All"]],
		/*|FIRST| NEXT PREV |LAST|*/
	 	"pagingType": "full_numbers",
	 	/*Header optional sortable*/
	 	"columnDefs": [

                   { "bSortable": false, "targets": 1 },
                   { "bSortable": false, "targets": 3 },
                   { "bSortable": false, "targets": 6 },
                   { "bSortable": false, "targets": 7 },
                                     
               ],
		responsive: true,
		stateSave:true,
	});
});
/*============END DataTable============*/

/*----------------------------search filters----------------------------*/
function filterGlobal () {
    $('#staffTable').DataTable().search(
        $('#global_filter').val()
        
    ).draw();
}
 
function filterColumn ( i ) {
    $('#staffTable').DataTable().column( i ).search(
        $('#col'+i+'_filter').val()
    ).draw();
}
 
$(document).ready(function() {
    $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
 
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );
    
    $('select.column_filter').on( 'change ', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );
} );
/*----------------------------search detail hide/show----------------------------*/
$(document).ready(function(){
    $(".toggler").click(function(e){
        e.preventDefault();
        $('.cat'+$(this).attr('data-prod-cat')).toggle();
    });
});

//Clear CheckBox Customer
function clearCheckBox(name){
    var x = document.getElementsByName(name);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].type == "checkbox") {
        	x[i].checked = false;
        }
    }
}
// CheckBox Customer
function checkAll(ele) {
    var checkboxes = document.getElementsByTagName('input');
    if (ele.checked) {
    	for (var i = 0; i < checkboxes.length; i++) {
    		if (checkboxes[i].type == 'checkbox') {
            	checkboxes[i].checked = true;
            }
		}
	} else {
        for (var i = 0; i < checkboxes.length; i++) {
        	console.log(i)
            if (checkboxes[i].type == 'checkbox') {
            	checkboxes[i].checked = false;
        	}
    	}	
	}
};


/*----------------------------Back To Top----------------------------*/
jQuery(document).ready(function($){
	
		//duration of the top scrolling animation (in ms)
	var	scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
