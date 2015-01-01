angular.module('NodeZen').directive('journeyLine', ['$window', 'JourneyTips', function ($window, JourneyTips){
	var elementWidth, elementHeight;
	return {
		restrict: 'EA',
		controller: 'GraphCtrl',
    scope: {
      data: '=',
      line: '='
  },
		link: function (scope, element, attrs, ctrl) {

			elementWidth = angular.element($window)[0].innerWidth;;
      elementHeight = 50;

			var svg = d3.select(element[0])
        .append("svg")
  	    .attr("width", elementWidth)
     		.attr("height", elementHeight);

        window.onresize = function () {
          scope.$apply();
        };

        scope.$watch('line', function () {
          svg.selectAll('*').data([]).text(function (d) {
            return d.name;
          }).exit().remove();
          scope.render(scope.line);
        }, true);

      scope.render = function (data) {

        var journeyPos = [];
        var journeyLineNodeSpacing = 40;

        data.forEach(function(node, i){
            var xPos = (i+1) * journeyLineNodeSpacing;
            var yPos = elementHeight/2;
            var position = {x: xPos, y: yPos};
            journeyPos.push(position);
        });

        /* Initialize tooltip */
        var tip = JourneyTips.initialize(elementWidth, elementHeight, journeyPos);
        /* Invoke the tip in the context of your visualization */
        svg.call(tip);

        var JourneyVis = svg 
            .selectAll(".journey-nodes")
            .data(data)
            .enter()

        JourneyVis.append("line")            
            .style("stroke", "cyan")          // colour the line
            .style("stroke-width", 2)         // adjust line width
            .style("stroke-linecap", "round")  // stroke-linecap type
            .attr("x1", function(d, i){
                return journeyPos[i].x;
            })
            .attr("x2", function(d, i){
                if(i > 0){
                    return journeyPos[i-1].x;
                } else {
                    return journeyPos[i].x;
                }
            })
            .attr("y1", function(d, i){
                return journeyPos[i].y;
            })
            .attr("y2", function(d, i){
                return journeyPos[i].y;
            })

          JourneyVis.append("circle")
              .style("fill", "cyan")
              .style("stroke-width", 2)  
              .attr("r", 10)
              .attr("cx", function(d,i){
                  return (i + 1) * 40;
              })
              .attr("cy", elementHeight/2)
              .style("stroke",function(d,i){
                if (i == journeyPos.length-1) {
                  return 'black'
                } else {
                  return 'cyan'
                };
              })
              // .on('mouseover', tip.show)
              // .on('mouseleave', tip.hide)
              .on("click", function(d, i){
                  scope.$parent.journeyLineNavigate(d.id, i);
                  //tip.hide;
              })
          }
		}
	}
}]);