angular.module('NodeZen').factory('cytoscape', ['$q', '$http', 'config',
    function ($q, $http, config) {
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
                    //cytoscapeinstance.center();
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
                //add node 
                nodeCollection.push({
                    group: "nodes",
                    data: {
                        description: nodes[i].description,
                        id: nodes[i].id + "",
                        image: nodes[i].image,
                        name: nodes[i].title,
                        source: nodes[i].source,
                        target: nodes[i].target,
                        tooltip: nodes[i].tooltip,
                        link: nodes[i].link,
                        domain: nodes[i].domain,
                        description: nodes[i].description
                    }
                });

                //add edges under that node
                for(var j = 0; j < nodes[i].edges.length; j++){
                    nodeCollection.push({
                        group: "edges",
                        data: {
                            id: "e" + nodes[i].id + "-" + nodes[i].edges[j],
                            name: 'some edge',
                            source: nodes[i].id,
                            target: nodes[i].edges[j]
                        }
                    });
                };         
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

        nodegraph.generateTooltipContent = function (node) {
            var toolTipContent = "";
            //title
            //toolTipContent = '<h1>' + node.name + '</h1><hr>';

            //image
            /*
            if((node.image || null) !== null){
                toolTipContent += '<img src="' + node.image + '" height="100px"><hr>';
            }
            */

            if(node.domain === "youtube") {
                var videoID;
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                var match = node.link.match(regExp);

                if (match&&match[7].length==11){
                    videoID = match[7];
                }

                toolTipContent += '<iframe id="ytplayer" style="z-index:999999" type="text/html" width="100%" height="270" src="https://www.youtube.com/embed/' + videoID + '?autoplay=0&theme=light" frameborder="0" allowfullscreen>';

            } else if (node.domain === "soundcloud") {
                var client_ID = '9fe2a2240624e436a99fd049a59af11c';
                toolTipContent += '<div id="soundcloud-import">SoundCloud player loading.</div>';
                $http.get('http://api.soundcloud.com/resolve.json?url=' + node.link + '&client_id=' + client_ID) 
                    .success(function(result) {//returns json, we only need id in this case
                        $("#soundcloud-import").replaceWith('<iframe width="100%" height="180px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + result.id +'&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=true"></iframe>');
                    })
                    .error(function(data, status, headers, config){
                        $("#soundcloud-import").replaceWith('<div id="soundcloud-import">SoundCloud player failed to load.</div>');
                    });   
            } else if(node.domain === "spotify"){
                toolTipContent += '<iframe src="https://embed.spotify.com/?uri=' + node.link + '" width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>'
            }

            //desc
            toolTipContent += '<p>' + node.description + '</p>';
            
            return toolTipContent;

        };

        return nodegraph;
}]);