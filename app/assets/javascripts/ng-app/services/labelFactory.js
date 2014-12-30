angular.module('NodeZen').factory('labelFactory', ['d3tip', '$filter', function (d3tip, $filter) {

		var label = {};

		var labels = [];
		var labelsEdges = [];

		label.initializeLabels = function(data){
			
			data.nodes.forEach(function(node){
				labels.push({
					node : node
				});
			})
			var i = 0;
			data.nodes.forEach(function(){
				labelsEdges.push({
					source : 0,
					target : i + 1,
					weight : 1
				})
			});
		}

		label.styleLabels = function(svg, force2){
			var label = svg.selectAll(".label")
				.data(force2.nodes())
				.enter().append("g")
				.attr("class", "label")

				label.append("line")
				.style("stroke", "black")          // colour the line
				.style("stroke-width", 20)         // adjust line width
				.style("stroke-linecap", "round")  // stroke-linecap type
				.attr("x1", -18)     // x position of the first end of the line
				.attr("x2", 200)     // x position of the second end of the line
				.attr("y1", -25)     // x position of the first end of the line
				.attr("y2", -25);     // x position of the second end of the line
				
				label.append("text")
				.attr("dx", 45)
				.attr("dy", -20)
				.attr("pointer-events", "none")
				.attr("font", "13px open_sansregular")
				.attr("fill", "white")
				.text(function (d) {
					return $filter('limitTo')(d.node.name, 23) + "...";
			});

			return label;
		}

		label.getAllLabels = function(){
			return labels;
		}

		label.getAllLabelsEdges = function(){
			return labelsEdges;
		}

 		return label;
 	}
]);