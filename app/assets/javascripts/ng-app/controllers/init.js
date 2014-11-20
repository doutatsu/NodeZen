angular.module('NodeZen')
.controller('init', function ($scope, cytoscape) {
    //sample data
    var gatheredNodes = [
        {
            group: 'nodes',
            id: '0',
            name: 'News',
            tooltip: '<div class="democontent"><img src="http://media1.juggledesign.com/qtip2/images/demos/owl_3.jpg" alt="" width="101" height="150" class="photo left"/><div class="info"><h1>Burrowing Owl</h1><p>The <a href="http://en.wikipedia.org/wiki/Burrowing_Owl">Burrowing Owl</a> (Athene cunicularia) is a small, long-legged owl found throughout open landscapes of North and South America. Burrowing owls can be found in grasslands, rangelands and deserts.</p><p>Unlike most owls, burrowing owls are often active during the day, although they tend to avoid the mid-day heat. Most hunting is still done from dusk until dawn, when their owl apomorphies are most advantageous.</p><p class="note">Image credit: <a href="http://www.flickr.com/photos/flaviocb/312257053/">Flickr</a></p><div class="clear"></div></div></div>'
        },
        {
            group: 'edges',
            id: '1',
            name: 'Music',
            source: '0',
            target: '3'
        },
        {
            group: 'nodes',
            id: '2',
            name: 'Video',
            tooltip: '<div class="democontent"><img src="http://media1.juggledesign.com/qtip2/images/demos/owl_3.jpg" alt="" width="101" height="150" class="photo left"/><div class="info"><h1>Burrowing Owl</h1><p>The <a href="http://en.wikipedia.org/wiki/Burrowing_Owl">Burrowing Owl</a> (Athene cunicularia) is a small, long-legged owl found throughout open landscapes of North and South America. Burrowing owls can be found in grasslands, rangelands and deserts.</p><p>Unlike most owls, burrowing owls are often active during the day, although they tend to avoid the mid-day heat. Most hunting is still done from dusk until dawn, when their owl apomorphies are most advantageous.</p><p class="note">Image credit: <a href="http://www.flickr.com/photos/flaviocb/312257053/">Flickr</a></p><div class="clear"></div></div></div>'
        },
        {
            group: 'nodes',
            id: '3',
            name: 'Sports',
            tooltip: '<div class="democontent"><img src="http://media1.juggledesign.com/qtip2/images/demos/owl_3.jpg" alt="" width="101" height="150" class="photo left"/><div class="info"><h1>Burrowing Owl</h1><p>The <a href="http://en.wikipedia.org/wiki/Burrowing_Owl">Burrowing Owl</a> (Athene cunicularia) is a small, long-legged owl found throughout open landscapes of North and South America. Burrowing owls can be found in grasslands, rangelands and deserts.</p><p>Unlike most owls, burrowing owls are often active during the day, although they tend to avoid the mid-day heat. Most hunting is still done from dusk until dawn, when their owl apomorphies are most advantageous.</p><p class="note">Image credit: <a href="http://www.flickr.com/photos/flaviocb/312257053/">Flickr</a></p><div class="clear"></div></div></div>'
        }
    ];

    //sample function
    $scope.loadNodes = function () {
        gatheredNodes[0].name = 'Books'
        gatheredNodes[2].name = 'Television'
        gatheredNodes[3].name = 'Games'
        gatheredNodes[1].source = '2'
        cytoscape.addNodes(gatheredNodes);
    };

    cytoscape.init().then(function (instance) {
        cytoscape.addNodes(gatheredNodes);
        cytoscape.setOnEvent('tap', 'node', function (evt) {
            $scope.selectedNode = evt.cyTarget.id();
        });

        cytoscape.setOnEvent('mousemove', 'node', function (event, instance) {
            var target = event.cyTarget;
            var nodeID = target.data("id");
            var nodeName = target.data("name");
            var nodeToolTip = target.data("tooltip");
            var node = instance.$("#" + nodeID);
            var xNode = event.cyPosition.x;
            var yNode = event.cyPosition.y;
            var createToolTip = false;

            if (typeof node.scratch('qtip') !== 'undefined') {
                if (!node.scratch('qtip').api.destroyed) {
                    if (!node.scratch('qtip').api.elements.tooltip.is(':visible')) {
                        $('div.qtip:visible').qtip('hide');
                        node.scratch('qtip').api.destroy();
                        createToolTip = true;
                    }
                } else {
                    createToolTip = true;
                }
            } else {
                createToolTip = true;
            }
            if (createToolTip && !node.grabbed()) {
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
                    hide: {
                        fixed: true,
                        leave: false,
                        when: {
                            event: 'unfocus'
                        }
                    }
                });
            }
        })
    });

    //sample function
    $scope.onNameChange = function (name, selectedNode, value) {
        cytoscape.setData(name, selectedNode, value);
    };
});