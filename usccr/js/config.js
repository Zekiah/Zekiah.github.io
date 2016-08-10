var global_month = "5/23 - 6/17";
var global_month_abbr = "5/23 - 6/17";
var global_year = "2016";
var global_geodata_issue = "usccr_issue_2016_05.geojson";
var global_tabledata_issue = "usccr_issue_2016_05.csv";
var global_geodata_basis = "usccr_basis_2016_05.geojson";
var global_tabledata_basis = "usccr_basis_2016_05.csv";
var global_tablesource = "usccr_table_source_2016_05.csv";

$('link[rel="issues"]').attr("href", "data/" + global_geodata_issue);
$('link[rel="basis"]').attr("href", "data/" + global_geodata_basis);

setVars();

function getParameterByName(name) {
    //if (!url) url = window.location.href;
	return $.url().param('month');
    /*name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));*/
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;	
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	//alert(hashes);
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function setVars(){
//alert(window.location.href);
	params = getUrlVars();
	//alert(JSON.stringify(params));
	if (params["month"]){
		var m = params["month"];
		var y = params["year"];
		var a = decodeURIComponent(params["abbrev"]);
		global_month = a;
		global_month_abbr = a;
		global_year = y;
		global_month_num = m;
		global_geodata_issue = "usccr_issue_" + y + "_" + m + ".geojson";
		global_tabledata_issue = "usccr_issue_" + y + "_" + m + ".csv";
		global_geodata_basis = "usccr_basis_" + y + "_" + m + ".geojson";
		global_tabledata_basis = "usccr_basis_" + y + "_" + m + ".csv";
		global_tablesource = "usccr_table_source_" + y + "_" + m + ".csv";
		$('link[rel="issues"]').attr("href", "data/" + global_geodata_issue);
		$('link[rel="basis"]').attr("href", "data/" + global_geodata_basis);
	}
}