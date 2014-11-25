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
                    group: "nodes",
                    data: {
                        description: nodes[i].description,
                        id: nodes[i].id + "",
                        image: nodes[i].image,
                        name: nodes[i].title,
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
                    my: 'bottom right'
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
        };

        nodegraph.generateTooltipContent = function (id) {
            var selectedNode = null;
            for (var i = 0; i < nodeCollection.length; i++) {
                if (nodeCollection[i].data.id == id) {
                    selectedNode = nodeCollection[i].data;
                };
            };
            return '<h1>' + selectedNode.name + '</h1><hr><img src="' + selectedNode.image + '" height="100px"><hr><p>' + selectedNode.description + '</p>';
            //return '<div class="democontent"><img src="http://media1.juggledesign.com/qtip2/images/demos/owl_3.jpg" alt="" width="101" height="150" class="photo left"/><div class="info"><h1>Burrowing Owl</h1><p>The <a href="http://en.wikipedia.org/wiki/Burrowing_Owl">Burrowing Owl</a> (Athene cunicularia) is a small, long-legged owl found throughout open landscapes of North and South America. Burrowing owls can be found in grasslands, rangelands and deserts.</p><p>Unlike most owls, burrowing owls are often active during the day, although they tend to avoid the mid-day heat. Most hunting is still done from dusk until dawn, when their owl apomorphies are most advantageous.</p><p class="note">Image credit: <a href="http://www.flickr.com/photos/flaviocb/312257053/">Flickr</a></p><div class="clear"></div></div></div>'

        };

        return nodegraph;
}]);