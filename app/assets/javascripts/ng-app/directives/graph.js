angular.module('NodeZen')
    .directive('graph', ['$window', 'd3tip', function ($window, d3tip) {
        var margin = 30;
        var width = 800;
        var height = 500 - .5 - margin;
        var colour = d3.interpolateRgb("#f77", "#77f");

        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function (scope, element, attrs) {

                var svg = d3.select(element[0])
                    .append("svg")
                    .attr("width", '100%')
                    .attr("height", height + margin + 200);

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
                        .gravity(.05)
                        .distance(400)
                        .charge(-100)
                        .size([angular.element($window)[0].innerWidth, height]);


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
                        .on('mouseover', tip.show)
                        .on('click', function(node){
                        	scope.$parent.getNodes(node.id);
                        })
                        .call(force.drag);

                    node.append("image")
                        .attr("xlink:href", "https://github.com/favicon.ico")
                        .attr("x", -64)
                        .attr("y", -32)
                        .attr("width", 64)
                        .attr("height", 64);

                    node.append("text")
                        .attr("dx", 12)
                        .attr("dy", ".35em")
                        .text(function (d) {
                            return d.name
                        });

                    force.on("tick", function () {
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
                    });
                }
            }
        }

    }]);