angular.module('NodeZen').controller('graph', ["$scope", "Restangular", "node", "$q",
    function ($scope, Restangular, node, $q) {
        $scope.graphData = {};
        var nodeCollection;
        
        $scope.getData = function () {
            node.getAllNodes().then(function (graphData){
                $scope.graphData = node.constructD3Data(graphData);
            });
        };

        $scope.getNode = function(nodeId){

            var deferred = $q.defer();
            
            node.getNode(nodeId).then(function (rootNode){
                deferred.resolve(rootNode); 
            });
            
            return deferred.promise;
        }

        $scope.getChildren = function(rootNode){

            var deferred = $q.defer();
            var childrenNodes = [];
            var promises = [];

            if(rootNode.edges.length > 0){
                rootNode.edges.forEach(function(child){
                    var promise = $scope.getNode(child);
                    promises.push(promise);
                    promise.then(function(edge){
                        edge.edges = [];
                        childrenNodes.push(edge);
                    });
                });
            }

            $q.all(promises).then(function(){
                deferred.resolve(childrenNodes);
            })

            return deferred.promise;
        }

        $scope.getNodes = function (id) {
          var nodes = [];
          var promise = $scope.getNode(id);

          promise.then(function(rootNode){
            var childrenPromise = $scope.getChildren(rootNode);
            childrenPromise.then(function(childNodes){
              nodes = childNodes;
              nodes.push(rootNode);
              
              $scope.graphData = node.constructD3Data(nodes);
            })
          })
        };        
        // $scope.getData();
        $scope.getNodes(19);
}]);