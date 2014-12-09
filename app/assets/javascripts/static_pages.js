$(document).ready(function () {
  examples();
  var height = $('.cover').height()
  $('#main').css('margin-top',height);
  $('.cover-text').css('padding-top',(height * 0.50)-250);

  $('#navigation').affix({
      offset: { top: height }
  });
  
  $('#navigation').on('affix.bs.affix', function () {
      $('.container-fluid').css('margin-top', $('#navigation').outerHeight(true))-10;
      $('#navigation').css('z-index', 3);
  });

  $('#navigation').on('affix-top.bs.affix', function () {
      $('.container-fluid').css('margin-top', 0);
      $('#navigation').css('z-index', 2);
  });

  $('.page_scroll').click(function (evt) {
      var $anchor = $(this);
      $('body').stop().animate({
          scrollTop: (($($anchor.attr('href')).offset().top)-$('#navigation').outerHeight(true))
      }, 300);
      evt.preventDefault();
  });
});
function examples(){ // on dom ready
  var context = {
    nodes: [
      { data: { id: 'center' } },
      { data: { id: 'deal' }, 
        css:  {
          'background-image': 'url(/assets/icons/present2.png)',
          'background-fit': 'none'
        }  
       },
      { data: { id: 'person' } },
      { data: { id: 'video' }, 
        css:  {
          'background-image': 'url(/assets/icons/play106.png)',
          'background-fit': 'none'
        }  
       },
      { data: { id: 'article' }, 
        css:  {
          'background-image': 'url(/assets/icons/article.png)',
          'background-fit': 'none'
        }  
      }
    ],
    edges: [
      { data: { source: 'center', target: 'deal' } },
      { data: { source: 'center', target: 'person' } },
      { data: { source: 'center', target: 'video' } },
      { data: { source: 'center', target: 'article' } },
    ]
  };
  var values = {
    nodes: [
      { data: { id: 'explore'} },
      { data: { id: 'discover' } },
      { data: { id: 'collaborate' } },
    ],
    edges: [
      { data: { source: 'explore', target: 'discover' } },
      { data: { source: 'explore', target: 'collaborate' } },
      { data: { source: 'discover', target: 'collaborate' } },
    ],

  };
  var graph = {
    nodes: [
      { data: { id: '1' },
        css:  {
          'background-image': 'url(/assets/icons/article.png)',
          'background-fit': 'none'
        } 
      },
      { data: { id: '2' },
        css:  {
          'background-image': 'url(/assets/icons/earth17.png)',
          'background-fit': 'none'
        } 
      },
      { data: { id: '3' },
        css:  {
          'background-image': 'url(/assets/icons/vintage.png)',
          'background-fit': 'none',
        } 
      },
      { data: { id: '4' }, 
        css:  {
          'background-image': 'url(/assets/icons/youtube.png)',
          'background-fit': 'none'
        } 
      },
      { data: { id: '5' }, 
        css:  {
          'background-image': 'url(/assets/icons/facebook.png)',
          'background-fit': 'none'
        }  
      },
      { data: { id: '6' }, 
        css:  {
          'background-image': 'url(/assets/icons/play106.png)',
          'background-fit': 'none'
        }  
      },
      { data: { id: '7' }, 
        css:  {
          'background-image': 'url(/assets/icons/social19.png)',
          'background-fit': 'none'
        }  
      },
    ],
    edges: [
      { data: { source: '1', target: '2' } },
      { data: { source: '1', target: '3' } },
      { data: { source: '1', target: '4' } },
      { data: { source: '1', target: '5' } },
      { data: { source: '1', target: '6' } },
      { data: { source: '1', target: '7' } },
    ]
  };

  // var cy = cytoscape({
  //   container: document.getElementById('cy'),
  //   style: cytoscape.stylesheet()
  //     .selector('node')
  //       .css({
  //         'height': 120,
  //         'width': 120,
  //         'border-color': '#000',
  //         'border-width': 1,
  //         'border-opacity': 0.5,
  //         'font-family': 'open_sanslight',
  //         'background-color': 'white'
  //       })
  //     .selector(':active')
  //       .css({
  //           'overlay-opacity': 0
  //       })
  //     .selector('edge')
  //       .css({
  //         'width': 4,
  //         'line-color': 'black',
  //         'target-arrow-color': '#6878D9'
  //       })
  //     .selector('#person')
  //       .css({
  //         'background-image': 'http://0adb8101b7ae4114a392-dfaacb9b5d3eae26a1de1132d02b2b65.r33.cf3.rackcdn.com/studio-shot-of-a-smiling-young-caucasian-girl-100158965.jpg'
  //       }),
    
  //   elements: context,
    
  //   layout: {
  //     name: 'concentric',
  //     directed: true,
  //     padding: 10
  //   },
  //   // ready: function(){
  //   //   var food = {};

  //   //   for(;;){
  //   //     var connectedEdges = nodes.connectedEdges(function(){
  //   //       return !this.target().anySame( nodes );
  //   //     });
        
  //   //     var connectedNodes = connectedEdges.targets();
        
  //   //     Array.prototype.push.apply( food, connectedNodes );
        
  //   //     nodes = connectedNodes;
        
  //   //     if( nodes.empty() ){ break; }
  //   //   }
            
  //   //   var delay = 0;
  //   //   var duration = 100;

  //   //   //collapse the context graph initially
  //   //   for( var i = food.length - 1; i >= 0; i-- ){ (function(){
  //   //     var thisFood = food[i];
  //   //     var eater = thisFood.connectedEdges(function(){
  //   //       return this.target().same(thisFood);
  //   //     }).source();

  //   //     thisFood.originalPos = jQuery.extend(true, {}, thisFood.position());

  //   //     thisFood.delay( delay, function(){
  //   //       eater.addClass('eating');
  //   //     } ).animate({
  //   //       position: eater.position(),
  //   //       css: {
  //   //         'width': 10,
  //   //         'height': 10,
  //   //         'border-width': 0,
  //   //         'opacity': 1
  //   //       }
  //   //     }, {
  //   //       duration: duration,
  //   //       complete: function(){
  //   //         thisFood.hide();
  //   //       }
  //   //     });

  //   //     delay += duration;
  //   //   })(); } // for
  //   // }
  // }); // cy init

  // Constructor for Core Values Example
  var cy_values = cytoscape({
    container: document.getElementById('cy_values'),

    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'height': 90,
          'width': 90,
          'background-fit': 'cover',
          'font-family': 'open_sanslight'
        })
      .selector(':active')
        .css({
            'overlay-opacity': 0
        })
      .selector('edge')
        .css({
          'width': 3,
          'line-color': 'black'
        })
      .selector('#explore')
        .css({
          'text-valign': 'center', 
          'font-family': 'open_sanslight',
          'content': 'Explore',
          'background-color': '#99FF66'
        })
      .selector('#discover')
        .css({
          'content': 'Discover',
          'text-valign': 'center', 
          'background-color': '#E62E2E',       
        })
      .selector('#collaborate')
        .css({
          'content': 'Collaborate',
          'text-valign': 'center',
          'background-color': '#FFFF80',
        }),
    
    elements: values,
    layout: {
      name: 'circle',
      directed: true,
      padding: 10
    }
  }); // cy init
  // Constructor for Graph Example 
  var cy_graph = cytoscape({
    container: document.getElementById('cy_graph'),

    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'height': 120,
          'width': 120,
          'background-color': 'white',
          'border-color': '#000',
          'border-width': 1,
          'border-opacity': 2,
        })
      .selector(':active')
        .css({
            'overlay-opacity': 0
        })
      .selector('edge')
        .css({
          'width': 4,
          'line-color': 'black',
          'target-arrow-color': '#6878D9',
          'control-point-step-size': '12'
        }),
    
    elements: graph,
    
    layout: {
      name: 'concentric',
      minNodeSpacing: 60,
      directed: true,
      padding: 10
    }
  }); // cy init
  // cy.center();
  // cy.userZoomingEnabled(false);
  // cy.userPanningEnabled(false);
  // cy.boxSelectionEnabled(false);
  // // Undraggable nodes
  // cy.autoungrabify(true);

  cy_values.center();
  cy_values.userZoomingEnabled(false);
  cy_values.userPanningEnabled(false);
  cy_values.boxSelectionEnabled(false);
  // Undraggable nodes
  cy_values.autoungrabify(true);

  cy_graph.height(300)
  cy_graph.width(300)
  cy_graph.zoomingEnabled(false);
  cy_graph.userZoomingEnabled(false);
  cy_graph.userPanningEnabled(false);
  cy_graph.boxSelectionEnabled(false);
  // Undraggable nodes
  cy_graph.autoungrabify(true);
  // var nodes = cy.getElementById("center");

  // $('#cy').waypoint(function() {
  //   extendContext(cy.getElementById("center"));
  // }, { offset: 150 });

  // cy.on('tap', 'node', function(){
  //   extendContext(this);
  // }); // on tap

  // function extendContext(centre){
  //   var nodes = centre;
  //   var tapped = nodes;
  //   var food = [];
    
  //   nodes.addClass('eater');
    
  //   for(;;){
  //     var connectedEdges = nodes.connectedEdges(function(){
  //       return !this.target().anySame( nodes );
  //     });
      
  //     var connectedNodes = connectedEdges.targets();
      
  //     Array.prototype.push.apply( food, connectedNodes );
      
  //     nodes = connectedNodes;
      
  //     if( nodes.empty() ){ break; }
  //   }
          
  //   var delay = 0;
  //   var duration = 500;

  //   for( var i = food.length - 1; i >= 0; i-- ){ (function(){

  //     var thisFood = food[i];
  //     thisFood.show();
  //     var eater = thisFood.connectedEdges(function(){
  //       return this.target().same(thisFood);
  //     }).source();

  //     thisFood.delay( delay, function(){
  //       eater.addClass('eating');
  //     } ).animate({
  //       position: thisFood.originalPos,
  //       css: {
  //         'width': 80,
  //         'height': 80,
  //         'border-width': 2,
  //         'opacity': 100
  //       }
  //     }, {
  //       duration: duration,
  //       complete: function(){
  //         thisFood.show();
  //       }
  //     });
      
  //     delay += duration;
  //   })(); } // for)(); } // for
  // }

}; // on dom ready */
