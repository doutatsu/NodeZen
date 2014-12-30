angular.module('NodeZen').factory('nodeFactory', ['d3tip', function (d3tip) {

		  var icons_codes = {"video": "\uf04b", "music": "\uf001", "article": "\uf0f6", "website": "\uf0ac"}
    	var nodeVisuals = {};

    	nodeVisuals.selectAllNodes = function(svg, force, label, width, height){

  		  var nodes = svg.selectAll(".node")
          .data(force.nodes())
          .enter().append("g")
          .attr("class", "node")
          .attr("cx", -1*(width/2 - 25))
  	      .attr("cy", function(d, i) { return (i*20-height/7*3 + 20); } )
          // .on('mouseover', tip.show)
          .on('click', function(node){
              
              var nodes        = svg.selectAll(".node");      // load all nodes
              var rootNode     = nodes[0][nodes[0].length-1]; // store middle node
              var rootLabel    = label[0][label[0].length-1]; // store middle node
              var selectedNode = this;
              var selectedLabel;

              // Find right label
              label.each(function(d, i) {                            
                if (d3.select(selectedNode).datum().id == d.node.id) {
                  selectedLabel = label[0][d.index];
                };
              });

              // Move chosen node to the middle
              d3.select(selectedNode)
                .transition()
                  .duration(750)
                  .attr("transform", d3.select(rootNode).attr("transform"))
                .each("end", function() {
                  // load node children
                  scope.$parent.getNodes(node.id);
                })
              // Move chosen node's label to the middle
              d3.select(selectedLabel)
                .transition()
                  .duration(750)
                  .attr("transform", d3.select(rootLabel).attr("transform"))
              // Retract edges
              // d3.selectAll(".link")
              //   .transition()
              //     .duration(750)
              //     .style('opacity','0')
              // select all the nodes except the node we've chosen
              d3.selectAll(nodes[0]).filter(function(d,i) {
                return (this !== selectedNode);
              })
              // Fade them out
              .transition()
                .duration(750)
                .style('opacity','0')
              // select all the labels except the node's label we've chosen
              d3.selectAll(label[0]).filter(function(d,i) {
                return (this !== selectedLabel);
              })
              // Fade them out
              .transition()
                .duration(750)
                .style('opacity','0');
              // Extract edges
          });

  				nodes.append("circle")
  				.attr("x", -64)
  				.attr("y", -32)
  				.attr("r", 40)
  				.style("stroke", "gray")
  				.style("stroke-width", 2)    // set the stroke width

  				nodes.append('text')
  				.attr('text-anchor', 'middle')
  				.attr("pointer-events", "none")
  				.attr('dominant-baseline', 'central')
  				.attr('font-family', 'FontAwesome')
  				.attr('font-size', '30px')
  				.attr('fill', 'black')
  				.text(function(d) { 
  					return icons_codes[d.kind]; 
  				}); 

			  return nodes;
 		}

 		return nodeVisuals;
 	}
]);