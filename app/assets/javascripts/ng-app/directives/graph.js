angular.module('NodeZen')
    .directive('graph', function ($window) {
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
                    .attr("height", height + margin + 100);

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
                    window.force = d3.layout.force()
                        .gravity(.05)
                        .distance(100)
                        .charge(-100)
                        .size([angular.element($window)[0].innerWidth, height]);


                    force.nodes(data.nodes)
                        .links(data.links)
                        .start();

                    var link = svg.selectAll(".link")
                        .data(data.links)
                        .enter().append("line")
                        .attr("class", "link");

                    var node = svg.selectAll(".node")
                        .data(data.nodes)
                        .enter().append("g")
                        .attr("class", "node")
                        .call(force.drag);

                    node.append("image")
                        .attr("xlink:href", "https://github.com/favicon.ico")
                        .attr("x", -8)
                        .attr("y", -8)
                        .attr("width", 16)
                        .attr("height", 16);

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

    });