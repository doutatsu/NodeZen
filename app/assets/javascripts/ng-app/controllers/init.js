angular.module('NodeZen').controller('init', function ($scope, cytoscape, Restangular) {
    //sample data
    var gatheredNodes = [
        {
            group: 'nodes',
            id: '0',
            name: 'News',
            tooltip: '<div class="democontent"><img src="http://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg" alt="" width="101" height="150" class="photo left"/><div class="info"><h1>Burrowing Owl</h1><p>The <a href="http://en.wikipedia.org/wiki/Burrowing_Owl">Burrowing Owl</a> (Athene cunicularia) is a small, long-legged owl found throughout open landscapes of North and South America. Burrowing owls can be found in grasslands, rangelands and deserts.</p><p>Unlike most owls, burrowing owls are often active during the day, although they tend to avoid the mid-day heat. Most hunting is still done from dusk until dawn, when their owl apomorphies are most advantageous.</p><p class="note">Image credit: <a href="http://www.flickr.com/photos/flaviocb/312257053/">Flickr</a></p><div class="clear"></div></div></div>'
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
        Restangular.all('node').getList().then(function(nodes){
            cytoscape.addNodes(nodes);
        });
    };

    cytoscape.init().then(function (instance) {
        Restangular.all('node').getList().then(function(nodes){
            cytoscape.addNodes(nodes);
        });
        cytoscape.setOnEvent('tap', 'node', function (evt) {
            $scope.selectedNode = evt.cyTarget.id();
        });

        
        //when node drag is finished, redisplay tooltip
        cytoscape.setOnEvent('free', 'node', function (event, instance) { 
            var target = event.cyTarget;
            var nodeID = target.data("id");
            var nodeName = target.data("name");
            var nodeToolTip = cytoscape.generateTooltipContent(target.data());
            var node = instance.$("#" + nodeID);
            
            $('div.qtip:visible').qtip('hide');
            $('div.qtip').remove();
            cytoscape.addToolTip(node, nodeName, nodeToolTip);     
        });

        //when hovering over cursors, open tooltip window
        cytoscape.setOnEvent('mousemove', 'node', function (event, instance) {
            var target = event.cyTarget;
            var nodeID = target.data("id");
            var nodeName = target.data("name");
            var nodeToolTip = cytoscape.generateTooltipContent(target.data());
            var node = instance.$("#" + nodeID);
            var createToolTip = false;

            if (typeof node.scratch('qtip') !== 'undefined') {
                if (!node.scratch('qtip').api.destroyed) {
                    if(typeof node.scratch('qtip').api.elements.tooltip !== 'undefined'){
                        if (!node.scratch('qtip').api.elements.tooltip.is(':visible')) {
                            node.scratch('qtip').api.destroy();
                            createToolTip = true;
                        }
                    }
                } else {
                    createToolTip = true;
                }
            } else {
                createToolTip = true;
            }

            if (createToolTip && !node.grabbed()) {
                // hide qtips, and then remove them from dom
                $('div.qtip:visible').qtip('hide');
                $('div.qtip').remove();
                cytoscape.addToolTip(node, nodeName, nodeToolTip);
            }
        })
    });

    //sample function
    $scope.onNameChange = function (name, selectedNode, value) {
        cytoscape.setData(name, selectedNode, value);
    };
});