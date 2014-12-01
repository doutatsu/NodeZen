$(document).ready(function () {
    // examples();
    var height = $('.cover').height()
    $('#main').css('margin-top',height);
    $('.cover-text').css('padding-top',(height * 0.50)-190);

    $('#navigation').affix({
        offset: {
            top: height
        }
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
      { data: { id: 'deal' } },
      { data: { id: 'person' } },
      { data: { id: 'video' } },
      { data: { id: 'article' } }
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
    ]
  };
  var graph = {
    nodes: [
      { data: { id: '1' } },
      { data: { id: '2' } },
      { data: { id: '3' } },
      { data: { id: '4' } },
      { data: { id: '5' } },
      { data: { id: '6' } },
      { data: { id: '7' } },
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

  var cy = cytoscape({
    container: document.getElementById('cy'),
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'height': 80,
          'width': 80,
          'background-fit': 'cover',
          'border-color': '#000',
          'border-width': 1,
          'border-opacity': 0.5,
          'font-family': 'open_sanslight'
        })
      .selector('.eating')
        .css({
          'border-color': 'red'
        })
      .selector('.eater')
        .css({
          'border-width': 9
        })
      .selector('edge')
        .css({
          'width': 4,
          'line-color': '#6878D9',
          'target-arrow-color': '#6878D9'
        })
      .selector('#deal')
        .css({
          'content': '50% off Microsoft Word',
          'text-valign': 'center',
        })
      .selector('#center')
        .css({
          'background-image': 'https://farm2.staticflickr.com/1261/1413379559_412a540d29_b.jpg'
        })
      .selector('#person')
        .css({
          'background-image': 'http://0adb8101b7ae4114a392-dfaacb9b5d3eae26a1de1132d02b2b65.r33.cf3.rackcdn.com/studio-shot-of-a-smiling-young-caucasian-girl-100158965.jpg'
        })
    .selector('#video')
        .css({
          'background-image': 'https://farm9.staticflickr.com/8316/8003798443_32d01257c8_b.jpg'
        })
    .selector('#article')
        .css({
          'background-image': 'https://farm6.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg'
        }),
    
    elements: context,
    
    layout: {
      name: 'concentric',
      directed: true,
      padding: 10
    }
  }); // cy init
  // Constructor for Core Values Example
  var cy2 = cytoscape({
    container: document.getElementById('cy2'),

    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'height': 90,
          'width': 90,
          'background-fit': 'cover',
          'font-family': 'open_sanslight'
        })
      .selector('edge')
        .css({
          'width': 3,
          'line-color': 'black',
        })
      .selector('#explore')
        .css({
          'content': 'Explore',
          'text-valign': 'center',
          'background-color': '#7BDE7B',
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
  var cy3 = cytoscape({
    container: document.getElementById('cy3'),

    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'height': 90,
          'width': 90,
          'background-fit': 'cover',
          'font-family': 'open_sanslight'
        })
      .selector('edge')
        .css({
          'width': 4,
          'line-color': 'black',
          'target-arrow-color': '#6878D9'
        })
      .selector('#explore')
        .css({
          'content': 'Explore',
          'text-valign': 'center',
          'background-color': '#6272A3',
        })
      .selector('#discover')
        .css({
          'content': 'Discover',
          'text-valign': 'center', 
          'background-color': '#FF3333',       
        })
      .selector('#collaborate')
        .css({
          'content': 'Collaborate',
          'text-valign': 'center',
          'background-color': '#6272A3',
        }),
    
    elements: graph,
    
    layout: {
      name: 'concentric',
      directed: true,
      padding: 10
    }
  }); // cy init
  cy.userZoomingEnabled(false);
  cy.userPanningEnabled(false);
  cy.boxSelectionEnabled(false);
  // Undraggable nodes
  cy.autoungrabify(true);

  cy2.userZoomingEnabled(false);
  cy2.userPanningEnabled(false);
  cy2.boxSelectionEnabled(false);
  // Undraggable nodes
  cy2.autoungrabify(true);

  cy3.height(100)
  cy3.width(100)
  cy3.zoomingEnabled(false);
  cy3.userZoomingEnabled(false);
  cy3.userPanningEnabled(false);
  cy3.boxSelectionEnabled(false);
  // Undraggable nodes
  cy3.autoungrabify(true);

  cy.on('tap', 'node', function(){
    var nodes = this;
    var tapped = nodes;
    var food = [];
    
    nodes.addClass('eater');
    
    for(;;){
      var connectedEdges = nodes.connectedEdges(function(){
        return !this.target().anySame( nodes );
      });
      
      var connectedNodes = connectedEdges.targets();
      
      Array.prototype.push.apply( food, connectedNodes );
      
      nodes = connectedNodes;
      
      if( nodes.empty() ){ break; }
    }
          
    var delay = 0;
    var duration = 500;
    for( var i = food.length - 1; i >= 0; i-- ){ (function(){
      var thisFood = food[i];
      var eater = thisFood.connectedEdges(function(){
        return this.target().same(thisFood);
      }).source();
              
      thisFood.delay( delay, function(){
        eater.addClass('eating');
      } ).animate({
        position: eater.position(),
        css: {
          'width': 10,
          'height': 10,
          'border-width': 0,
          'opacity': 0
        }
      }, {
        duration: duration,
        complete: function(){
          thisFood.remove();
        }
      });
      
      delay += duration;
    })(); } // for
    
  }); // on tap
}; // on dom ready