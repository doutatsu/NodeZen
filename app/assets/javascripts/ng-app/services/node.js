angular.module('NodeZen').factory('node', ['Restangular', '$q',
  function (Restangular, $q) {
  	var node = {};

  	node.constructD3Data = function(graphData){
      var nodes    = [];
      var links    = [];
      nodes.length = 0;
      links.length = 0;

      for (var i = 0; i < graphData.length; i++) {
        nodes.push({
          description: graphData[i].description,
          id: graphData[i].id,
          image: graphData[i].image,
          tags: graphData[i].tags,
          name: graphData[i].title,
          source: graphData[i].source,
          target: graphData[i].target,
          tooltip: graphData[i].tooltip,
          link: graphData[i].link,
          kind: graphData[i].kind,
          preview: graphData[i].preview,
          domain: graphData[i].domain,
          description: graphData[i].description,
          group: Math.floor((Math.random() * 20) + 1)
        });

        for (var j = 0; j < graphData[i].edges.length; j++) {
          links.push({
            //id: "e" + graphData[i].id + "-" + graphData[i].edges[j],
            //name: 'some edge',
            source: graphData[i].id,
            target: graphData[i].edges[j],
            value: Math.floor((Math.random() * 10) + 1)
          });
        };
      }

      nodeCollection = {
        nodes: nodes,
        links: links
      };

      return nodeCollection;
  	}

  	node.getAllNodes = function(){
  		return Restangular.all('node').getList();
  	}

  	node.getNodes = function(edges){
  		edges.unshift("node");
  		return Restangular.several('node', 1, 2).get();
  		//return Restangular.several.apply(null, edges).getList();
  	}

  	node.getNode = function(id){
  		return Restangular.one('node', id).get();
  	}

  	return node;
  }
]);