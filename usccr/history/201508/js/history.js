var global_history = {"201501": {"path": "history/201501", "label": "1/1 - 1/25/2015"},
						"201502": {"path": "history/201502", "label": "1/26 - 2/20/2015"},
						"201503": {"path": "history/201503", "label": "2/23 - 3/20/2015"},
						"201504": {"path": "history/201504", "label": "3/23 - 4/24/2015"},
						"201505": {"path": "history/201505", "label": "4/27 - 5/22/2015"},
						"201506": {"path": "history/201506", "label": "5/25 - 6/19/2015"},
						"201507": {"path": "history/201507", "label": "6/22 - 7/14/2015"}},
						"201508": {"path": "history/201508", "label": "7/20 - 8/14/2015"}};

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
