/*============FIRST LOADING============*/
$(window).load(function() {
	$(".loader").fadeOut("slow");
});
/*============END FIRST LOADING============*/

/*============MODAL============*/
$('#modal-add-cus').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
/*============END MODAL============*/




    // CheckBox Customer
    function checkBoxCustomer(name){
        var startNum = parseInt(document.getElementById("start-range").value) - 1;
        var endNum = parseInt(document.getElementById("end-range").value);
        var names = document.getElementsByName(name);

        if(startNum < 0 || startNum > names.length - 1 || startNum > endNum - 1 || endNum > names.length){
        	var info= document.getElementById('myTable_info');
        	var textContent = info.textContent;
        	var cutNeededString = textContent.replace('Showing ','');
        	var pos = cutNeededString.indexOf('entries');
        
        	/*contain string: ... to ... of .... entries*/
        	var msg = cutNeededString.substring(0,pos);
            alert(msg);
            return;
        }
        var i;
        for (i = startNum; i < endNum; i++) {
            if (names[i].type == "checkbox") {
                names[i].checked = true;
            }
        }
    }

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
/*Transaction status*/
$(document).ready(function(){
	alert($('#myTable tr:eq(3) td:eq(10) p').html());
	var transactionStatus = document.getElementsByTagName('p');
	var tSLength = transactionStatus.length+3;
	for(i=3;i<tSLength;i++){

		if($('#myTable tr:eq('+i+') td:eq(10) p').html().indexOf('Chưa')>=0 ){
			$('#myTable tr:eq('+i+') td:eq(10) p').addClass('not-yet');
		}else if($('#myTable tr:eq('+i+') td:eq(10) p').html().indexOf('Kết')>=0 ){
			$('#myTable tr:eq('+i+') td:eq(10) p').addClass('finish');
		}else if($('#myTable tr:eq('+i+') td:eq(10) p').html().indexOf('Đồng')>=0 ){
			$('#myTable tr:eq('+i+') td:eq(10) p').addClass('agree');
		}else if($('#myTable tr:eq('+i+') td:eq(10) p').html().indexOf('Từ')>=0 ){
			$('#myTable tr:eq('+i+') td:eq(10) p').addClass('refuse');
		}else if($('#myTable tr:eq('+i+') td:eq(10) p').html().indexOf('Xác')>=0 ){
			$('#myTable tr:eq('+i+') td:eq(10) p').addClass('confirm');
		}else if($('#myTable tr:eq('+i+') td:eq(10) p').html().indexOf('F1')>=0 ){
			$('#myTable tr:eq('+i+') td:eq(10) p').addClass('f1');
		}
	}
});

$("#content #myTable p").addClass('not-yet');
/*============DataTable============*/

$(document).ready(function() {
	
	var table = $('#myTable').DataTable( {
        
		/*Number of entries in table*/
		"lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "All"]],
		/*|FIRST| NEXT PREV |LAST|*/
	 	"pagingType": "full_numbers",
	 	/*Header optional sortable*/
	 	"columnDefs": [
                   { "bSortable": false, "targets": 1 },
                   { "bSortable": false, "targets": 3 },
                   { "bSortable": false, "targets": 4 },
                   { "bSortable": false, "targets": 5 },
                   { "bSortable": false, "targets": 7 }
                   
               ],
		responsive: true,
		stateSave:true,

       

        /*"scrollY": "200px",*/
        /*"paging": false*/
    } );
 
    $('a.toggle-vis').on( 'click', function (e) {
        e.preventDefault();
 
        // Get the column API object
        var column = table.column( $(this).attr('data-column') );
 
        // Toggle the visibility
        column.visible( ! column.visible() );
    } );


   	
} );
/*----------------------------search filters----------------------------*/
function filterGlobal () {
    $('#myTable').DataTable().search(
        $('#global_filter').val()
        
    ).draw();
}
 
function filterColumn ( i ) {
    $('#myTable').DataTable().column( i ).search(
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
} );
/*----------------------------search detail hide/show----------------------------*/
$(document).ready(function(){
    $(".toggler").click(function(e){
        e.preventDefault();
        $('.cat'+$(this).attr('data-prod-cat')).toggle();
    });
});
/* check/uncheck box*/
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
/*============DATA IN TALBE============*/
/*---------------------tooltips---------------------*/
$(function(){
	$('.time_tooltip').tooltip();
});

/*Back To Top*/
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


