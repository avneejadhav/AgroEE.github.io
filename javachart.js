
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: ""
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 2013},
			{ y: 2014},
			{ y: 2015}, 
			{ y: 2016 },
			{ y: 2017},
			{ y: 2018},
			{ y: 2019, indexLabel: "Highest",markerColor: "DarkSlateGrey", markerType: "triangle" }
			
		]
	}]
});
chart.render();

}