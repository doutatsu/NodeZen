angular.module('NodeZen').controller('GraphCtrl', ["$scope", "Restangular", "node", "$q",
    function ($scope, Restangular, node, $q) {
        $scope.graphData = null;
        $scope.journeyLine = [];
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
            } else {
                promises.push($q.defer().resolve());
            }

            $q.all(promises).then(function(){
                deferred.resolve(childrenNodes);
            })

            return deferred.promise;
        }

        $scope.getNodes = function (id, context) {
            var nodes = [];
            var promise = $scope.getNode(id);

            promise.then(function(rootNode){
                var childrenPromise = $scope.getChildren(rootNode);
                childrenPromise.then(function(childNodes){
                    nodes = childNodes;
                    // Show thank you modal if no edges spotted
                    if (childNodes.length <= 0) {
                        $("#myModal").modal("show");
                    }
                    rootNode.edges.push(rootNode.id);
                    nodes.push(rootNode);
                    if(context === "graph"){
                        rootNode.current = true;
                        $scope.addToJourneyLine(rootNode);
                    } else if(context === "journeyLine") {
                        for(var i = 0; i < $scope.journeyLine.length; i++){
                            $scope.journeyLine[i].current = false;
                            if($scope.journeyLine[i].id === rootNode.id){
                                $scope.journeyLine[i].current = true; 
                            }
                        }
                    }
                    $scope.graphData = node.constructD3Data(nodes);
                })
            })
        };

        $scope.addToJourneyLine = function(node){
            var indexOfCurrentNode;
            for(var i = 0; i < $scope.journeyLine.length; i++){
                if($scope.journeyLine[i].current === true){
                    indexOfCurrentNode = i;
                }
                
                $scope.journeyLine[i].current = false;
                
                if($scope.journeyLine[i].id === node.id){
                    $scope.journeyLine[i].current = true; 
                }
            }

            if($scope.journeyLine.length > 0){
                if($scope.journeyLine[$scope.journeyLine.length-1].id !== node.id){
                    if(typeof $scope.journeyLine[indexOfCurrentNode+1] !== "undefined"){
                        if($scope.journeyLine[indexOfCurrentNode+1].id !== node.id){
                            $scope.journeyLine = $scope.journeyLine.slice(0, indexOfCurrentNode+1);
                            $scope.journeyLine.push(node);
                        } else {
                            $scope.journeyLine[indexOfCurrentNode+1].current = true;
                        }
                    } else {
                        $scope.journeyLine.push(node);
                    }
                }
            } else {
                $scope.journeyLine.push(node);
            }
        } 

        $scope.journeyLineNavigate = function(nodeId, arrayPos){
            $scope.getNodes(nodeId, "journeyLine");
        }

        // $scope.getData();
        $scope.getNodes(32, "graph");

}]);