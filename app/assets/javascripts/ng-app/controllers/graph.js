angular.module('NodeZen').controller('graph', ["$scope", "Restangular",
    function ($scope, Restangular) {
        $scope.graphData = {};
        var nodeCollection;
        
        $scope.getData = function () {
            $scope.graphData = nodeCollection;
        };

        Restangular.all('node').getList().then(function (graphData) {
            var nodes = [];
            var links = [];
            nodes.length = 0;
            links.length = 0;

            for (var i = 0; i < graphData.length; i++) {
                //add node 
                nodes.push({
                    description: graphData[i].description,
                    id: graphData[i].id + "",
                    image: graphData[i].image,
                    name: graphData[i].title,
                    source: graphData[i].source,
                    target: graphData[i].target,
                    tooltip: graphData[i].tooltip,
                    link: graphData[i].link,
                    domain: graphData[i].domain,
                    description: graphData[i].description,
                    group: Math.floor((Math.random() * 20) + 1)
                });

                for (var j = 0; j < graphData[i].edges.length; j++) {
                    links.push({
                        //id: "e" + graphData[i].id + "-" + graphData[i].edges[j],
                        //name: 'some edge',
                        source: 1, //graphData[i].id,
                        target: 2, //graphData[i].edges[j],
                        value: Math.floor((Math.random() * 10) + 1)
                    });
                };
            }

            nodeCollection = {
                nodes: nodes,
                links: links
            };
        });

        $scope.graphData = {
            "nodes": [{
                "name": "Myriel",
                "group": 1
    }, {
                "name": "Napoleon",
                "group": 1
    }, {
                "name": "Woman1",
                "group": 2
    }, {
                "name": "Judge",
                "group": 2
    }, {
                "name": "Champmathieu",
                "group": 2
    }, {
                "name": "Brevet",
                "group": 2
    }, {
                "name": "Chenildieu",
                "group": 2
    }, {
                "name": "Cochepaille",
                "group": 2
    }, {
                "name": "Pontmercy",
                "group": 4
    }, {
                "name": "Boulatruelle",
                "group": 6
    }, {
                "name": "Eponine",
                "group": 4
    }, {
                "name": "Anzelma",
                "group": 4
    }, {
                "name": "Mme.Pontmercy",
                "group": 5
    }, {
                "name": "Mlle.Vaubois",
                "group": 5
    }, {
                "name": "Lt.Gillenormand",
                "group": 5
    }, {
                "name": "Mme.Hucheloup",
                "group": 8
    }],
            "links": [{
                "source": 1,
                "target": 0,
                "value": 1
    }, {
                "source": 9,
                "target": 0,
                "value": 1
    }]
        };
}]);