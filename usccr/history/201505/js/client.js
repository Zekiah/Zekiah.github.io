function MyClient() {
    var self = this,
	width = $('#map').width(),
	mapCanvasHeight = (width * 0.45);

  this.init = function() {
    self.drawMap();
    //self.drawMarker();
    //self.drawArc();
  }
 
  this.drawMap = function () {
        var data;
        console.log(width, mapCanvasHeight);
        // Most parts of D3 don't know anything about SVG—only DOM.

        self.svg = d3.select('#map').append('svg:svg')
                  .attr("width", "100%")
                  .attr("height", "100%")
                  .attr("viewBox", "0 0 " + width + " " + mapCanvasHeight);

        self.map = d3.geo.equirectangular().scale(width).center(-98.5,39.5);
        self.path = d3.geo.path().projection(self.map);

        self.countries = self.svg.append('svg:g').attr('id', 'countries');
        d3.json("data/us_squares.geojson", function(json) {
            self.countries.selectAll("path")
            .data(json.features)
            .enter().append("path")
            .attr("d", self.path)
            .on("mouseover", function(d) {
                d3.select(this).style("fill","#6C0");})
            .on("mouseout", function(d) {
                d3.select(this).style("fill","#000000");})
        });

    }

  this.drawMarker = function (message) {
    var city = "Mountain View";
    /// use longitude and latitude
    var mapCoords = this.map([-122.05740356445312, 37.4192008972168]);
	x = mapCoords[0]; // longitude
	y = mapCoords[1]; // latitude
 
        self.svg.append("svg:circle")
	    .attr("r", 5)
	    .attr("transform", function() { return "translate(" + x + "," + y + ")"; })
            .attr("class", "member")
	    .style("fill", "steelblue")
	    .on("mouseover", function(){
		d3.select(this).transition()
			.attr("r", 15)
	     })
	    .on("mouseout", function() {
		//this.parentNode.appendChild(this);
		d3.select(this).transition()
			.attr("r", 5)
	});
	
        self.svg.append("svg:text")
	    .attr("x", x - 10)
	    .attr("dy", y + 10)
	    .style("fill", "red")
	    .text(function(d) { return city; });
  }

  this.drawArc = function() {

    var arcs = self.svg.append("g")
      .attr("id", "arcs");

    var arc = d3.geo.greatArc()
      .precision(1);

    var links = [{
      'source': [-118.24368, 34.05223],
      'target': [114.15769, 22.28552]
      }];

    arcs.selectAll("path")
     .data(links)
     .enter().append("path")
     .style("stroke-width", 2)
     .style("stroke", "orange")
     .style("fill", "none")
     .attr("d", function(d) { return self.path(arc(d)); });

  }

  this.init();
};

var MyClient;
jQuery(function() {
  MyClient = new MyClient();
});