var w = 1000,
	h = 800;


var svgContainer = d3.select("body").append("svg")
                                     .attr("width", w)
                                     .attr("height", h);

var circles = svgContainer.selectAll("circle");

var callNewCircle = function() {
	d3.json("data.json", function(error, json){
		if (error) throw error;
		var l = json.items.length;
		var randomItem = Math.floor((Math.random() * l) + 0);

		newCircle(json.items[randomItem]);
	});
};

var newCircle = function(data){

	var x = Math.floor((Math.random() * w) + 1),
		y = Math.floor((Math.random() * h) + 1),
		r = 50,
		imageW = (2*r) - 10,
		imageH = (2*r) - 10;


	var g = svgContainer
		.append("g")
		.data([data]);

	var circle = g
	   	.append("circle");


	g.append("text").text(data.answer.answerText._value)
		.attr("x", x)
		.attr("y", y);


	circle
		.transition().duration(1000)
		.attr("cx", x)
		.attr("cy", y)
		.attr("r", r)

		.attr("fill", function (d){
			var hue =  Math.floor((Math.random() * 360) + 1);
			return "hsla(" + hue + ", 50%, 50%, 0.5)";
		});


	var circles = svgContainer.selectAll("circle");

	g.on("click", function(name){

	    var name = "Diane Abbott";

	    getMPData(name, function(response) {
	        console.log(response);
	    });

	});
};
