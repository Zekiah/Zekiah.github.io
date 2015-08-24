var global_history = {"201501": {"path": "history/201501", "label": "January 2015"},
						"201502": {"path": "history/201502", "label": "February 2015"},
						"201503": {"path": "history/201503", "label": "March 2015"},
						"201504": {"path": "history/201504", "label": "April 2015"},
						"201505": {"path": "history/201505", "label": "May 2015"},
						"201506": {"path": "history/201506", "label": "June 2015"},
						"201507": {"path": "history/201507", "label": "July 2015"}};

function loadHistory(){
    var temp = global_history;
	//alert(temp);
    //alert(options);
    var meh = $('#selhistory'); 
		//alert(meh);
    //select.find('option').remove(); 
	meh.append('<option value=' + 'meh' + '>' + 'Select Month...' + '</option>');
	var current = window.location.toString().toLowerCase();
	if (current.indexOf('history') > -1){
		meh.append('<option value=' + "" + '>' + 'Current Month' + '</option>');
	}
    $.each(temp,function(key, value) 
	{
		meh.append('<option value=' + value.path + '>' + value.label + '</option>');
	});
	//alert(JSON.stringify(meh));
}

$('#selhistory').on('change', function() {
	if(this.value !== 'meh'){
		//alert( this.value ); // or $(this).val()
		//var loc = window.location.toString().replace('index.html', '') + this.value;
		var current = window.location.toString().toLowerCase();
		var loc = "./" + this.value;
		if (current.indexOf('history') > -1){
			loc = "../../" + this.value;
		}
		//var loc = "./" + this.value;
		window.location = loc;
	}
});

loadHistory();
