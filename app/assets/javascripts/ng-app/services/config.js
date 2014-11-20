angular.module('NodeZen')
  .factory('config', [
    function () {
      var config = {
          container: $('#cy')[0],
          motionBlur: false,
          zoomingEnabled: false,
          style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'background-color': '#f0f0f0',
                'border-color': '#505050',
                'border-width': 5,
                'content': 'data(name)',
                'font-size': '11px',
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
    }
  ]);