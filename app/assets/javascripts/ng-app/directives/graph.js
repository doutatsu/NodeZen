angular.module('NodeZen')
    .directive('graph', ['$window', 'd3tip','$filter', function ($window, d3tip, $filter) {
 
        var width;
        var height = 700 - .5;
        var colour = d3.interpolateRgb("#f77", "#77f");
        var icons_codes = {"video": "\uf04b", "music": "\uf001", "article": "\uf0f6", "website": "\uf0ac"}

        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function (scope, element, attrs) {

            	width = angular.element($window)[0].innerWidth;

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
                    scope.render(scope.data);
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
						    edges.push({source: sourceNode, target: targetNode});
						});
                	}


                    window.force = d3.layout.force()
						.charge(-1000)
						.gravity(.01)
						.friction(.8)
						.linkStrength(9)
						.linkDistance( function(d) { if (width < height) { return width*1/3; } else { return height*1/3 } } ) // Controls edge length
                        .size([width, height])
                        .on('start', function(){
                            svg.style("opacity", "0")
                            // console.log("started")
                            // var nodes = svg.selectAll(".node")
                            // console.log(d3.selectAll(nodes))
                            // .style("opacity", "0");
                        })
                        .on('end', function(){
                            svg
                            .transition()
                                .duration(450)
                                .style("opacity", "1")
                        });

                    force.nodes(data.nodes)
                        .links(edges)
                        .start();

                    var link = svg.selectAll(".link")
                        .data(edges)
                        .enter().append("line")
                        .attr("class", "link");

                    var node = svg.selectAll(".node")
                        .data(data.nodes)
                        .enter().append("g")
                        .attr("class", "node")
                        .attr("cx", -1*(width/2 - 25))
            			.attr("cy", function(d, i) { return (i*20-height/7*3 + 20); } )
                        // .on('mouseover', tip.show)
                        .on('click', function(node){
                            var nodes = svg.selectAll(".node") // load all nodes
                            var root = nodes[0][nodes[0].length-1] // store middle node
                            // Move chosen node to the middle
                            d3.select(this)
                              .transition()
                                  .duration(750)
                                  .attr("transform", d3.select(root).attr("transform"))
                            var circleUnderMouse = this;
                            // select everything except the node we've chosen
                            d3.selectAll(nodes[0]).filter(function(d,i) {
                              return (this !== circleUnderMouse);
                            })
                            // Fade out everything else
                            .transition()
                                .duration(750)
                                .style('opacity','0');
                            // load node children
                            
                        })
                        .call(force.drag);
                    // Title container
                    node.append("line")
                        .style("stroke", "black")          // colour the line
                        .style("stroke-width", 20)         // adjust line width
                        .style("stroke-linecap", "round")  // stroke-linecap type
                        .attr("x1", 20)     // x position of the first end of the line
                        .attr("x2", 200)     // x position of the second end of the line
                        .attr("y1", -25)     // x position of the first end of the line
                        .attr("y2", -25)     // x position of the second end of the line
                    // First Circle
                    node.append("circle")
                        .attr("x", -64)
                        .attr("y", -32)
                        .attr("r", 40)
                        .style("stroke", "gray")
                        .style("stroke-width", 2)    // set the stroke width
                    // Second Circle
                    // node.append("circle")
                    //     .attr("x", -64)
                    //     .attr("y", -32)
                    //     .attr("r", 37)
                    //     .style("stroke", "black")
                    // Icons
                    node.append('text')
                        .attr('text-anchor', 'middle')
                        .attr("pointer-events", "none")
                        .attr('dominant-baseline', 'central')
                        .attr('font-family', 'FontAwesome')
                        .attr('font-size', '30px')
                        .attr('fill', 'black')
                        .text(function(d) { 
                            return icons_codes[d.kind]; 
                        }); 
                    // Title
                    node.append("text")
                        .attr("dx", 45)
                        .attr("dy", -20)
                        .attr("pointer-events", "none")
                        .attr("font", "13px open_sansregular")
                        .attr("fill", "white")
                        .text(function (d) {
                            return $filter('limitTo')(d.name, 10) 
                        });

                    force.on("tick", function () {
                    	//last node in the array is the root node, so center it
                    	data.nodes[data.nodes.length-1].x = width / 2;
                    	data.nodes[data.nodes.length-1].y = height/ 2;
                        link.attr("x1", function (d) {
                            return d.source.x;
                        })
                            .attr("y1", function (d) {
                                return d.source.y;
                            })
                            .attr("x2", function (d) {
                                return d.target.x;
                            })
                            .attr("y2", function (d) {
                                return d.target.y;
                            });

                        node.attr("transform", function (d) {
                            return "translate(" + d.x + "," + d.y + ")";
                        });   
                    })
                    // force.on('end', function(){
                    //     node[0].style("opacity", "0");
                    // });
                }
            }
        }

    }]);