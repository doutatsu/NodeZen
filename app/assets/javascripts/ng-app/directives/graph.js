angular.module('NodeZen')
    .directive('graph', ['$window', 'd3tip', '$filter', 'nodeFactory', 'labelFactory', function ($window, d3tip, $filter, nodeFactory, labelFactory) {

      var width;
      var height = 700 - .5;
      var colour = d3.interpolateRgb("#f77", "#77f");

      return {
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
        	width = angular.element($window)[0].innerWidth;
        	var rePopulateHeights = true;

          var svg = d3.select(element[0])
            .append("svg")
            .attr("width", width)
            .attr("height", height);

          window.onresize = function () {
            scope.$apply();
          };

          scope.$watch('data', function () {
              svg.selectAll('*').data([]).text(function (d) {
                return d.name;
              }).exit().remove();

              if(scope.data){
                scope.render(scope.data);
              }
          }, true);

          scope.render = function (data) {
          /* Initialize tooltip */
				  tip = d3tip.initialize(svg);

    			svg.on("click", function(){
    				svg.selectAll(".node").each(function(d, i) { 
    					tip.hide(this);
    				})
    			});
				/* Invoke the tip in the context of your visualization */
				svg.call(tip)
      	//	to make the edges work 
      	//	we need to map them manually to correct ids
      	//	d3js uses array mapping
      	//	but we have custom ids on nodes
      	var edges = [];
      	if(typeof data.links != 'undefined'){
          data.links.forEach(function(e) { 
  	        // Get the source and target nodes
  	        var sourceNode = data.nodes.filter(function(n) { return n.id === e.source; })[0],
  	        targetNode = data.nodes.filter(function(n) { return n.id === e.target; })[0];
      	    // Add the edge to the array
      	    edges.push({source: sourceNode, target: targetNode, weight : Math.random()});
      	 });
      	}

      	// nasty code will be changed to an actual service over factory as more appropiate 
        labelFactory.initializeLabels(data);
        var labels = labelFactory.getAllLabels();
        var labelsEdges = labelFactory.getAllLabelsEdges();

        window.force = d3.layout.force()
					.charge(-3000)
					.gravity(1)
					.linkStrength(12)
					.linkDistance(function(d,i){
				    var dist = (i % 2 == 0) ? 250 : 275;
					  return dist;
					})
					.size([width, height])
          // When force layout starts to get calcualted
          .on('start', function(){
            svg.style("opacity", "0")
          })
          // Force layout and node positions calcualted
          .on('end', function(){
            svg.transition()
              .duration(450)
              .style("opacity", "1")
            // Move chosen node's label to the middle
            var nodes                  = svg.selectAll(".node")
            var labels                 = svg.selectAll(".label")
            var rootNode               = nodes[0][nodes[0].length-1] // store middle node
            var rootLabel              = label[0][label[0].length-1] // store middle node
            var originalNodePositions  = {};
            var originalLabelPositions = {};
            // Save original node positions
            for (var i = nodes[0].length - 1; i >= 0; i--) {
              originalNodePositions[i] = { transform : d3.select(nodes[0][i]).attr("transform") }
            };
            // Save original labels positions
            for (var i = labels[0].length - 1; i >= 0; i--) {
              originalLabelPositions[i] = { transform : d3.select(labels[0][i]).attr("transform") }
            };
            // Put all nodes inside the centre one 
            d3.selectAll(nodes[0])
              .transition()
                .duration(1)
                .attr("transform", d3.select(rootNode).attr("transform"))
            // Put all labels inside the centre one 
            d3.selectAll(labels[0])
              .transition()
                .duration(1)
                .attr("transform", d3.select(rootLabel).attr("transform"))
            // retract all edges
            console.log(d3.selectAll(svg.selectAll(".link"))[0][0])
            // d3.selectAll(svg.selectAll(".link"))
            //   .transition()
            //     .duration(1)
            //     .attr("transform", d3.select(rootLabel).attr("transform"))
            // After everything hidden, return nodes and edges to their original positions
            setInterval(function(){ 
              // return nodes
              d3.selectAll(nodes[0]).each(function(d,i) {
                d3.select(this)
                  .transition()
                    .duration(750)
                    .attr("transform", originalNodePositions[d.index].transform)
              })
              // return labels
              d3.selectAll(labels[0]).each(function(d,i) {
                d3.select(this)
                  .transition()
                    .duration(750)
                    .attr("transform", originalLabelPositions[d.index].transform)
              })
            }, 750);
          });

          window.force2 = d3.layout.force()
						.charge(-3000)
						.gravity(1)
						.linkStrength(8)
						.linkDistance(0)
            .size([width, height]);  

            force.nodes(data.nodes)
              .links(edges)
              .start();

            force2.nodes(labels)
          	.links(labelsEdges)
          	.start();

            var link = svg.selectAll(".link")
              .data(edges)
              .enter().append("line")
              .attr("class", "link");

            var label = labelFactory.styleLabels(svg, force2);
            var labelLinks = svg.selectAll(".Labellink").data(labelsEdges)
            var node = nodeFactory.selectAllNodes(svg, force, label, width, height);

			var updateLink = function() {
				this.attr("x1", function(d) {
					return d.source.x;
				}).attr("y1", function(d) {
					return d.source.y;
				}).attr("x2", function(d) {
					return d.target.x;
				}).attr("y2", function(d) {
					return d.target.y;
				});
			}

			var updateNode = function() {
				this.attr("transform", function(d) {
					return "translate(" + d.x + "," + d.y + ")";
				});
			}

			var getMin = function(array){
			  return Math.min.apply(Math,array);
			}

			var getMax = function(array){
			  return Math.max.apply(Math,array);
			}

        force.on("tick", function () {
        	force2.start();
        	//last node in the array is the root node, so center it
        	data.nodes[data.nodes.length-1].x = width / 2;
        	data.nodes[data.nodes.length-1].y = height/ 2;
        	var rootNodePos = height/ 2;
        	var nodeHeights = [];
        	var highestNode;
        	var lowestNode;

          node.call(updateNode);
					
					if(rePopulateHeights){
            for(var i = 0; i < data.nodes.length; i++){
            	nodeHeights.push(data.nodes[i].y);
            }
          	highestNode = getMax(nodeHeights);
          	lowestNode = getMin(nodeHeights);
          	rePopulateHeights = false;
          }
					/* fix */
          node.each(function(d,i){
          	var offset = 0;
          	node.each(function(o,i){
          		if(Math.random() * (999) < 10 ){
            		if(Math.abs(d.y - o.y) < 20){
            			if(rootNodePos != d.y && rootNodePos != o.y && d.y != o.y){
            				offset = d.y - o.y > 0 ? -10 : 10;
            				if(d.y == highestNode){
            					o.y += offset * 2;
            				} else if(d.y == lowestNode){
            					o.y -= offset * 2;
            				} else if(o.y == highestNode){
            					d.y += offset * 2;
            				} else if(o.y == lowestNode){
            					d.y -= offset * 2;
            				} else {
            					d.y += offset;
              				o.y -= offset;
            				}
            				rePopulateHeights = true;
          				}
            		}
          		}
          	})
          	
          })
          	label.each(function(d, i) {
  						d.x = d.node.x;
  						d.y = d.node.y;
  					});
          	label.call(updateNode);

            link.call(updateLink);
            labelLinks.call(updateLink);
          });
        }
      }
    }
  }]);
