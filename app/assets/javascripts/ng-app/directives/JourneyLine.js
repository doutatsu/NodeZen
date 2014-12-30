angular.module('NodeZen').directive('journeyLine', ['$window', 'd3tip', function ($window, d3tip){
	var elementWidth, elementHeight;
	return {
		restrict: 'EA',
		controller: 'GraphCtrl',
		link: function (scope, element, attrs, ctrl) {
			elementWidth = angular.element($window)[0].innerWidth;
			elementHeight = angular.element($window)[0].innerHeight;

			var svg = d3.select(element[0])
            	        .append("svg")
                	    .attr("width", elementWidth)
                   		.attr("height", elementHeight);

            window.onresize = function () {
                    scope.$apply();
            };

            scope.$watch('journeyLine', function () {
                svg.selectAll('*').data([]).text(function (d) {
                    return d.name;
                }).exit().remove();
                // console.log(scope.journeyLine);
                scope.render(scope.journeyLine);
            }, true);

            scope.render = function (data) {
            	/* Initialize tooltip */
				tip = d3tip.initialize(svg);
				/* Invoke the tip in the context of your visualization */
				svg.call(tip);


            }

		}

	}
}]);