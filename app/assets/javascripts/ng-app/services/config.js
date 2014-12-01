angular.module('NodeZen').factory('config', [
    function () {
        var config = {
            container: $('#cy5')[0],
            motionBlur: false,
            zoomingEnabled: false,
            style: cytoscape.stylesheet()
                .selector('node')
                .css({
                    'background-color': '#f7f7f7',
                    'border-color': '#b2dce8',
                    'border-width': 3,
                    'content': 'data(name)',
                    'font-size': '13px',
                    'height': 70,
                    'width': 70,
                    'text-valign': 'center',
                    'color': '#3e3e3e'
                })
                .selector(':active')
                .css({
                    'overlay-opacity': 0
                })
                .selector(':selected')
                .css({
                    'background-color': '#727272',
                    'border-color': '#5a5656',
                    'color': '#e8e8e8'
                })
                .selector('edge')
                .css({
                    'line-color': '#b2dce8',
                    'width' : '2px'
                }),
            layout: {
                name: 'circle',
                padding: 20
            },
            elements: {
                nodes: [],
                edges: []
            },
            ready: null
        };

        return config;
}]);