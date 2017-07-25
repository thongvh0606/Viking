$(function() {
    $('input[name="daterange"]').daterangepicker({
  
    	locale: {
      format: 'DD-MM-YY',
       cancelLabel: 'Clear'

    },
        singleDatePicker: true,
        showDropdowns: true,
            opens:'center'
    }, 
    );
});


$(document).ready(function() {
      var table = $('#example').DataTable();
 
      // Add event listeners to the two range filtering inputs
      $('#min').keyup( function() { table.draw(); } );
      $('#max').keyup( function() { table.draw(); } );
  } );

/*$(document).ready(function(){
        $(function() {
            $( "#min" ).datepicker();
        });
		 
        $(function() {
            $( "#max" ).datepicker();
        });
        
        var oTable=$('#example').dataTable();*/
                
        /* Add event listeners to the two date-range filtering inputs */
/*				
	$('#min').change( function() { oTable.fnDraw(); } );
        $('#max').change( function() { oTable.fnDraw(); } );
	});	*/
	/*
	$(function(){
        $("#to_kt").datepicker({ dateFormat: 'dd-mm-yy' });
        $("#from_kt").datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
            $("#to_kt").datepicker( "option", "minDate", minValue );
        })
    });
$(function(){
        $("#to_bd").datepicker({ dateFormat: 'dd-mm-yy' });
        $("#from_bd").datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
            $("#to_bd").datepicker( "option", "minDate", minValue );
        })
    });
$(function(){
        $("#to_sdc").datepicker({ dateFormat: 'dd-mm-yy' });
        $("#from_sdc").datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
            $("#to_sdc").datepicker( "option", "minDate", minValue );
        })
    });*/