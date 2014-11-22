angular.module('NodeZen').factory('cytoscape', ['$q', 'config',
    function ($q, config) {
        var nodegraph = {};
        var cytoscapeinstance;
        var nodeCollection = [];

        nodegraph.init = function () {
            var deferred = $q.defer();

            config.elements.nodes = [];

            config.ready = function () {
                window.onresize = function () {
                    cytoscapeinstance.layout({
                        name: config.layout.name
                    });
                    cytoscapeinstance.center();
                };
                deferred.resolve(cytoscapeinstance);
            };

            $(function () {
                cytoscapeinstance = cytoscape(config);
            });

            return deferred.promise;
        };

        nodegraph.addNodes = function (nodes) {
            nodeCollection.length = 0;
            for (var i = 0; i < nodes.length; i++) {
                nodeCollection.push({
                    group: nodes[i].group,
                    data: {
                        id: nodes[i].id,
                        name: nodes[i].name,
                        source: nodes[i].source,
                        target: nodes[i].target,
                        tooltip: nodes[i].tooltip
                    }
                });
            };
            cytoscapeinstance.load(nodeCollection);
        };

        nodegraph.getNodes = function () {
            return nodeCollection;
        };

        nodegraph.setOnEvent = function (event, selector, fn) {
            cytoscapeinstance.on(event, selector, function (evt) {
                fn(evt, cytoscapeinstance);
            });
        };

        nodegraph.setData = function (data, id, name) {
            cytoscapeinstance.$('#' + id).data(data, name);
        };

        nodegraph.addToolTip = function (node, nodeName, nodeToolTip) {
            node.qtip({
                content: {
                    title: nodeName,
                    text: nodeToolTip,
                    button: 'Close'
                },
                show: {
                    delay: 20,
                    event: false,
                    ready: true,
                    effect: false

                },
                position: {
                    my: 'bottom left'
                },
                hide: {
                    fixed: true,
                    leave: false,
                    when: {
                        event: 'unfocus'
                    }
                },
                style: {
                   classes: 'qtip-bootstrap qtip-rounded qtip-shadow',
                    width: 600,
               }
            });
        }

        return nodegraph;
}]);