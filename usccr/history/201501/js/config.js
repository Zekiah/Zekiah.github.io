var global_month = "1/1 - 1/25";
var global_month_abbr = "1/1 - 1/25";
var global_year = "2015";
var global_geodata_issue = "usccr_issues_2015_01.geojson";
var global_tabledata_issue = "usccr_issues_2015_01.csv";
var global_geodata_basis = "usccr_basis_2015_01.geojson";
var global_tabledata_basis = "usccr_basis_2015_01.csv";
var global_tablesource = "usccr_table_source_2015_01.csv";

$('link[rel="issues"]').attr("href", "data/" + global_geodata_issue);
$('link[rel="basis"]').attr("href", "data/" + global_geodata_basis);
