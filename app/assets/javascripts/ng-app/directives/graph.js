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
          	// var edges = [];
          	// if(typeof data.links != 'undefined'){
           //    data.links.forEach(function(e) { 
      	    //     // Get the source and target nodes
      	    //     var sourceNode = data.nodes.filter(function(n) { return n.id === e.source; })[0],
      	    //     targetNode = data.nodes.filter(function(n) { return n.id === e.target; })[0];
          	//     // Add the edge to the array
          	//     edges.push({source: sourceNode, target: targetNode, weight : Math.random()});
          	//  });
          	// }

            var nodePos = [];

            data.nodes.forEach(function(node, i){
              
              var angleBetweenEachNode = (360 / (data.nodes.length - 1));
              var angleOfCurrentNode = i * angleBetweenEachNode;
              var edgeLength = 300;
              var deg2rad = Math.PI/180;
              var rad2deg = 180/Math.PI;
              var centreNode = {x : width/2, y: height/2};
              var nodeTransform = {x : null, y : null};
              var calculatedPosition = {};

              if(angleOfCurrentNode <= 45){
                y = Math.sin( angleOfCurrentNode * deg2rad ) * edgeLength;
                x = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(y, 2));
                nodeTransform.x = x;
                nodeTransform.y = -y;

              }else if(angleOfCurrentNode <= 90){
                x = Math.sin((90 - angleOfCurrentNode) * deg2rad) * edgeLength;
                y = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(x, 2));
                nodeTransform.x = x;
                nodeTransform.y = -y;
              }else if(angleOfCurrentNode <= 135){
                x = Math.sin((45 - (135- angleOfCurrentNode)) * deg2rad) * edgeLength;
                y = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(x, 2));
                nodeTransform.x = -x;
                nodeTransform.y = -y;
              }else if(angleOfCurrentNode <= 180){
                y = Math.sin( (180 - angleOfCurrentNode) * deg2rad ) * edgeLength;
                x = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(y, 2));
                nodeTransform.x = -x;
                nodeTransform.y = -y;
              }else if(angleOfCurrentNode <= 225){
                y = Math.sin( (angleOfCurrentNode - 180) * deg2rad ) * edgeLength;
                x = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(y, 2));
                nodeTransform.x = -x;
                nodeTransform.y = y;
              }else if(angleOfCurrentNode <= 270){
                x = Math.sin( (45-(angleOfCurrentNode - 225)) * deg2rad ) * edgeLength;
                y = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(x, 2));
                nodeTransform.x = -x;
                nodeTransform.y = y;
              }else if(angleOfCurrentNode <= 315){
                x = Math.sin( (angleOfCurrentNode - 270) * deg2rad ) * edgeLength;
                y = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(x, 2));
                nodeTransform.x = x;
                nodeTransform.y = y;
              }else if(angleOfCurrentNode <= 360){
                y = Math.sin( (45-(angleOfCurrentNode - 315)) * deg2rad ) * edgeLength;
                x = Math.sqrt(Math.pow(edgeLength, 2) - Math.pow(y, 2));
                nodeTransform.x = x;
                nodeTransform.y = y;
              }

              if(data.nodes.length-1 == i){
                calculatedPosition = centreNode;
              } else {
                calculatedPosition = {x: centreNode.x + nodeTransform.x, y : centreNode.y + nodeTransform.y, test: "n"};
              }
              nodePos.push(calculatedPosition);
            })

            var icons_codes = {"video": "\uf04b", "music": "\uf001", "article": "\uf0f6", "website": "\uf0ac"}
    
            var nodes = svg
                .selectAll(".node")            
                .data(data.nodes)
                .enter()
                .append("g");
                
                nodes.append("line")
                .style("stroke", "black")          // colour the line
                .style("stroke-width", 20)         // adjust line width
                .style("stroke-linecap", "round")  // stroke-linecap type
                .attr("x1", function(d, i){
                  return nodePos[i].x;
                })     // x position of the first end of the line
                .attr("x2", function(d, i){
                  return nodePos[i].x + 225;
                })      // x position of the second end of the line
                .attr("y1", function(d, i){
                  return nodePos[i].y - 25;
                })      // x position of the first end of the line
                .attr("y2", function(d, i){
                  return nodePos[i].y - 25;
                })      // x position of the second end of the line

                nodes.append("circle")
                .attr("class", "node")          
                .attr("x", -64)
                .attr("y", -32)
                .attr("r", 40)
                .style("stroke", "gray")
                .style("stroke-width", 2)
                .attr("cx", function(d, i){
                  return nodePos[i].x;
                })
                .attr("cy", function(d, i){
                  return nodePos[i].y;
                })

                nodes.append('text')
                .attr('text-anchor', 'middle')
                .attr("pointer-events", "none")
                .attr('dominant-baseline', 'central')
                .attr('font-family', 'FontAwesome')
                .attr('font-size', '30px')
                .attr('fill', 'white')
                .attr("x", function(d, i){
                  return nodePos[i].x;
                })
                .attr("y", function(d, i){
                  return nodePos[i].y;
                })
                .text(function(d) {
                  console.log(icons_codes[d.kind]); 
                  return icons_codes[d.kind]; 
                });
                
                nodes.append("text")
                .attr("dx", 45)
                .attr("dy", -20)
                .attr("x", function(d, i){
                  return nodePos[i].x;
                })
                .attr("y", function(d, i){
                  return nodePos[i].y;
                })
                .attr("pointer-events", "none")
                .attr("font", "13px open_sansregular")
                .attr("fill", "white")
                .text(function (d) {
                  return $filter('limitTo')(d.name, 23) + "...";
                });
          }
        }
      }
  }]);
