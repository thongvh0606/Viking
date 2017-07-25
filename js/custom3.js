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

/*----------------------------check/uncheck box----------------------------*/
function checkAll(ele) {
  var checkboxes = document.getElementsByTagName('input');
  if (ele.checked) {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {
        checkboxes[i].checked = true;
        showDiv();
      }
    }
  } else {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {          
        checkboxes[i].checked = false;  
      }
    }
    hideDiv();
  }
};

function showDiv(){
  var div = document.getElementById('multiAction');
  if(div.style.display==='none'){
    div.style.display = 'block';
  }
}
function hideDiv(){
 var div = document.getElementById('multiAction');
  if(div.style.display==='block'){
    div.style.display = 'none';
  } 
}

    //Clear CheckBox Customer

/*%(document).ready(function(){

});*/
/*----------------------------Transaction status----------------------------*/
$(document).ready(function(){
	
	var transactionStatus = document.getElementsByTagName('p');
	var tSLength = transactionStatus.length+1;
  var colNum = 8;
  var tagType = "p"
	for(i=1;i<tSLength;i++){

		if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('Chưa GD')>=0 ){
			$('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('not-yet');
		}else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('Hoàn Tất GD')>=0 ){
			$('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('finish');
		}else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('KH Đồng Ý')>=0 ){
      $('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('cus-agree');
    }else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('KH Từ Chối')>=0 ){
      $('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('cus-refuse');
    }else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('KH Hoãn GD')>=0 ){
			$('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('cus-delay');
		}else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('HT Từ Chối GD')>=0 ){
			$('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('sys-refuse');
		}else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('HT Chấp Nhận GD')>=0 ){
			$('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('sys-confirm');
		}else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('HT Hoãn GD')>=0 ){
      $('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('sys-delay');
    }else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('Đã Nộp Hồ Sơ')>=0 ){
      $('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('f1');
    }else if($('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').html().indexOf('Đã Lấy Hồ Sơ')>=0 ){
			$('#myTable tr:eq('+i+') td:eq('+colNum+') '+tagType+'').addClass('f2');
		}
	}
});
/*----------------------------Convert yyyy/mm/dd -> dd/mm/yyyy BD-KT-SDC Column ----------------------------*/
$(document).ready(function(){
  var bdNoCol = 5;
  /*var ktCol = 6;*/
  /*var TDCNoCol = 7;*/
  var maxCol= 8;
  var rowCount = document.getElementById("myTable").rows.length;
  for(var i = 1; i<rowCount;i++){
    //bd
    for(var y = bdNoCol; y<maxCol;y++){
      var date = $('#myTable tr:eq('+i+') td:eq('+y+')').html();  
    var year =date.substring(0,4);
    var mon =date.substring(5,7);
    var day =date.substring(8,10);
    var newDate = day+'/'+mon+'/'+year;
    $('#myTable tr:eq('+i+') td:eq('+y+')').text(newDate);
    }        
  }  
});



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
                   
                   { "bSortable": false, "targets": 5 },
                   { "bSortable": false, "targets": 6 },
                   { "bSortable": false, "targets": 7 },
                   { "bSortable": false, "targets": 10 },
               ],
		responsive: true,
		stateSave:true,
    } );
  

    /*----------------------------Show/hide column----------------------------*/
    $('button.toggle-vis').on( 'click', function (e) {
        e.preventDefault();
 
        // Get the column API object
        var column = table.column( $(this).attr('data-column') );
 
        // Toggle the visibility
        column.visible( ! column.visible() );        
    } );
        
        /*active show hide column button*/
        iColumns = $('#myTable thead th').length;
        for (var i = 0; i< iColumns; i++) {
            if(table.column(i).visible()===false){
                switch(i){
                    case 0:
                    $('#showHideCol #showHideBtn1').addClass('active');
                    break;
                    case 1:
                    $('#showHideCol #showHideBtn2').addClass('active');
                    break;
                    case 2:
                    $('#showHideCol #showHideBtn3').addClass('active');
                    break;
                    case 3:
                    $('#showHideCol #showHideBtn4').addClass('active');
                    break;
                    case 4:
                    $('#showHideCol #showHideBtn5').addClass('active');
                    break;
                    case 5:
                    $('#showHideCol #showHideBtn6').addClass('active');
                    break;
                    case 6:
                    $('#showHideCol #showHideBtn7').addClass('active');
                    break;
                    case 7:
                    $('#showHideCol #showHideBtn8').addClass('active');
                    break;

                }
            }
        }

    
/*alert( 'Column index 0 is '+
        (table.column( 0 ).visible() === true ? 'visible' : 'not visible')
    );*/
   	
} );


/*SEARCH BY DATE RANGE*/
$(document).ready(function(){

  $('#myTable').dataTable().yadcf([

    {
            column_number: 5,
            filter_type: "range_date",
            datepicker_type: 'bootstrap-datetimepicker',
            date_format: "DD/MM/YYYY",
            filter_delay: 500,
            filter_container_id: "external_filter_container_bd",

            
        },
        {
            column_number: 6,
            filter_type: "range_date",
            datepicker_type: 'bootstrap-datetimepicker',
            date_format: "DD/MM/YYYY",
            filter_delay: 500,
            filter_container_id: "external_filter_container_kt"
        },
        {
            column_number: 7,
            filter_type: "range_date",
            datepicker_type: 'bootstrap-datetimepicker',
            date_format: "DD/MM/YYYY",
            filter_delay: 500,
            filter_container_id: "external_filter_container_tdc"
        }
        
      ]);
});


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
    
    $('select.column_filter').on( 'change ', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );
} );
/*CLEAR SEARCHING TEXT */

/*
 
$(document).ready(function() {
    $('table.display').DataTable();
    
    $('input.column_filter').on( 'keyup click ', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );
    $('select.column_filter').on( 'change ', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );

} );*/



/*----------------------------search detail hide/show----------------------------*/
$(document).ready(function(){
    $(".toggler").click(function(e){
        e.preventDefault();
        $('.cat'+$(this).attr('data-prod-cat')).toggle();
    });
});

/*============DATA IN TALBE============*/

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
$(document).ready(function(){
$('#external_filter_container_bd input').addClass('form-control');
$('#external_filter_container_kt input').addClass('form-control');
$('#external_filter_container_tdc input').addClass('form-control');
});