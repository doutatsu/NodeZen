angular.module('NodeZen').factory('d3tip', ['$http',
    function ($http) {

    	var d3tipInstance = {};

    	d3tipInstance.initialize = function(svg, nodePos){

			var d3tip = d3.tip()
			.attr('class', 'd3-tip')
			.html(function(d) {
				return d3tipInstance.generateTooltipContent(d);
			})
			.direction(function(d, i){
				return d3tipInstance.calculateToolTipDirection(d, i, nodePos, svg);
			});

			return d3tip;
		}

		d3tipInstance.generateTooltipContent = function (node) {

            var toolTipContent = "";

            if(node.domain === "youtube") {
              var videoID;
              var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
              var match = node.link.match(regExp);

              if (match&&match[7].length==11){
                  videoID = match[7];
              }

              toolTipContent += '<iframe id="ytplayer" style="z-index:999999" type="text/html" width="100%" height="270" src="https://www.youtube.com/embed/' + videoID + '?autoplay=0&theme=light" frameborder="0"></iframe>';

            } else if (node.domain === "soundcloud") {
                toolTipContent += '<div id="soundcloud-import" style="height:180px;" class"outerLoadingBar"><div class="innerLoadingBar"><img src="/assets/ajax-loader.gif" height="42" width="42"></img></div></div>';
                d3tipInstance.soundCloudImport(node);

            } else if(node.domain === "spotify"){
                toolTipContent += '<iframe src="https://embed.spotify.com/?uri=' + node.link + '" width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>'
            
            } else if(node.kind === "article" || node.kind === "website"){
                var preview = "<img src='" + node.preview + "'>"
                toolTipContent += '<div class="preview">' + preview + '</div>'         
              }
            var tags = '';
            var nodes = node.tags.split(",");
            for(var i = 0; i < nodes.length-1; i++){
              tags += '<div class="tag">' + nodes[i] + '</div>';
            }
            //desc
            toolTipContent += 
            '<div class="description">' + node.description + '</div>' + 
            '<div class="tags">' + tags + '</div>' + 
            '<div class="source"><a href="' + node.link + '">Source</a></div>'
            // '<div class="social"><button type="button" class="facebook btn btn-primary btn-lg"><i class="fa fa-facebook"></i></button> <button type="button" class="twitter btn btn-primary btn-lg"><i class="fa fa-twitter"></i></button>  <button type="button" class="google btn btn-primary btn-lg"><i class="fa fa-google-plus"></i></button> </div>';
            
            return toolTipContent;
        }

        d3tipInstance.soundCloudImport = function(node){	
        		//for some reason using $http causes a problem while hiding d3tips. jquery .ajax works though... mystery
                var client_ID = '9fe2a2240624e436a99fd049a59af11c';
        	    $.ajax({
					url: 'http://api.soundcloud.com/resolve.json?url=' + node.link + '&client_id=' + client_ID,
					context: document.body
				}).done(function(result) {
					$("#soundcloud-import").replaceWith('<iframe id="frame" width="100%" height="180px" style="z-index:999999" type="text/html" 	scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + result.id +'&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=true"></iframe>');
				});
        }

		d3tipInstance.calculateToolTipDirection = function(d, i, nodePos, svg){
				/*
				divide the graph area 
				into 9 subsections
				and decide which direction
				node tooltip will appear
				(0,0)
				----------------
				| SE | S  | SW |
				----------------  < first level height
				|  E |  X  | W |
				----------------  < second level height
				|  NE | N | NW |
				---------------- (width, height)
					
				nodes in the middle 
				will require further 
				calculations

			*/
			
      var height            = svg[0][0].clientHeight;
      var width             = svg[0][0].clientWidth;
      var posX              = nodePos[i].x;
      var posY              = nodePos[i].y;
      var firstLevelHeight  = height * (1/3);
      var secondLevelHeight = height * (2/3);
      var firstLevelDepth   = width * (1/3);
      var secondLevelDepth  = width * (2/3);

			var level;
			var depth;
      var mappings   = [];
      mappings[0]    = "se";
      mappings[1]    = "s";
      mappings[2]    = "sw";
      mappings[3]    = "e";
      mappings[4]    = [];
      mappings[4][0] = "se";
      mappings[4][1] = "sw";
      mappings[4][2] = "ne";
      mappings[4][3] = "nw";
      mappings[5]    = "w";
      mappings[6]    = "ne";
      mappings[7]    = "n";
      mappings[8]    = "nw";

			if(posY < firstLevelHeight){
				level = 0;
			} else if(posY > firstLevelHeight && posY < secondLevelHeight){
				level = 3;
			} else if(posY > secondLevelHeight ){
				level = 6;
			} 

			if(posX < firstLevelDepth){
				depth = 0;
			} else if(posX > firstLevelDepth && posX < secondLevelDepth){
				depth = 1;
			} else if(posX > secondLevelDepth){
				depth = 2;
			}

			if(level + depth === 4){
				if(posY <= (height * 0.5)){
					level = 0;
				} else {
					level = 2;
				}

				if(posX <= (width * 0.5)){
					depth = 0;
				}  else {
					depth = 1;
				}

				return mappings[4][level+depth];
			}

			return mappings[level + depth];
		}
		
		return d3tipInstance;

 	}
]);