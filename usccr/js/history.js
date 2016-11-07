var global_history = {"201501": {"path": "./?month=01&year=2015&abbrev=1%2F1%20-%201%2F25", "label": "1/1 - 1/25/2015"},
						"201502": {"path": "./?month=02&year=2015&abbrev=1%2F26%20-%202%2F20", "label": "1/26 - 2/20/2015"},
						"201503": {"path": "./?month=03&year=2015&abbrev=2%2F23%20-%203%2F20", "label": "2/23 - 3/20/2015"},
						"201504": {"path": "./?month=04&year=2015&abbrev=3%2F23%20-%204%2F24", "label": "3/23 - 4/24/2015"},
						"201505": {"path": "./?month=05&year=2015&abbrev=4%2F27%20-%205%2F22", "label": "4/27 - 5/22/2015"},
						"201506": {"path": "./?month=06&year=2015&abbrev=5%2F25%20-%206%2F19", "label": "5/25 - 6/19/2015"},
						"201507": {"path": "./?month=07&year=2015&abbrev=6%2F22%20-%207%2F14", "label": "6/22 - 7/14/2015"},
						"201508": {"path": "./?month=08&year=2015&abbrev=7%2F20%20-%208%2F14", "label": "7/20 - 8/14/2015"},
						"201509": {"path": "./?month=09&year=2015&abbrev=8%2F17%20-%209%2F11", "label": "8/17 - 9/11/2015"},
						"201510": {"path": "./?month=10&year=2015&abbrev=9%2F14%20-%2010%2F16", "label": "9/14 - 10/16/2015"},
						"201511": {"path": "./?month=11&year=2015&abbrev=10%2F19%20-%2011%2F20", "label": "10/19 - 11/20/2015"},
						"201512": {"path": "./?month=12&year=2015&abbrev=11%2F21%20-%2012%2F27", "label": "11/21 - 12/27/2015"},
						"201601": {"path": "./?month=01&year=2016&abbrev=12%2F28%20-%202%2F2", "label": "12/28/2015 - 2/2/2016"},
						"201602": {"path": "./?month=02&year=2016&abbrev=2%2F3%20-%202%2F21", "label": "2/3/2016 - 2/21/2016"},
						"201603": {"path": "./?month=03&year=2016&abbrev=2%2F22%20-%203%2F18", "label": "2/22/2016 - 3/18/2016"},
						"201604": {"path": "./?month=04&year=2016&abbrev=4%2F25%20-%205%2F20", "label": "4/25/2016 - 5/20/2016"},
						"201605": {"path": "./?month=05&year=2016&abbrev=5%2F23%20-%206%2F17", "label": "5/23/2016 - 6/17/2016"}
						};

function loadHistory(){
    var temp = global_history;
	//alert(temp);
    //alert(options);
    var meh = $('#selhistory'); 
		//alert(meh);
    //select.find('option').remove(); 
	meh.append('<option value=' + 'meh' + '>' + 'Select Period...' + '</option>');
	var current = window.location.toString().toLowerCase();
	if (current.indexOf('history') > -1){
		meh.append('<option value=' + "" + '>' + 'Current Period' + '</option>');
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
