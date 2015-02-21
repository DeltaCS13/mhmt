function startSite(){ 
   $('.stone1').css({display:'block'}).stop().animate({left:-310},2800,'easeOutExpo');

};

function showSplash(){
	setTimeout(function () {
		//$('.main2').stop().animate({height:530, paddingTop:100},800,'easeOutExpo');	
		//$('#content').stop().animate({height:254},800,'easeOutExpo');			
	}, 0);
	
};
function hideSplash(){ 
   $('.main5').stop().animate({left:0},800,'easeOutExpo');
   $('.main3').stop().animate({right:20,width:700},800,'easeOutExpo');
   $('.main4').stop().animate({width:700},800,'easeOutExpo');
   $('.splash').stop().animate({opacity:0},200,'easeOutExpo', function(){ $(this).css({display:'none'}); });
   $('#content').stop().animate({width:680},800,'easeOutExpo');
   $('.shadow2').stop().animate({width:880},800,'easeOutExpo');
};
function hideSplashQ(){
	$('.main5').css({left:0});
	$('.main3').css({right:20,width:700});
	$('.main4').css({width:700});
	$('.splash').css({opacity:0, display:'none'});
	$('#content').css({width:680}); 
	$('.shadow2').css({width:880});
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});
	

	
	/////// icons
	$(".icons li").find("a").css({opacity:0.5});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutBack');		    
	},function(){
	    $(this).stop().animate({opacity:0.5 }, 400, 'easeOutBack' );		   
	});
	
	///////// gallery	
	$('.photo1').find('span').css({opacity:0});	
	$('.photo1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400);								
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400);								
	});	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
		
 });  ////////




$(window).load(function() {
						
	// for lightbox					
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});						
						
	// slider
	$('.slider')._TMS({
			show:0,
			pauseOnHover:false,
			duration:400,
			preset:'diagonalExpand',
            easing:"easeInOutExpo",
			pagination:true,//'.pagination',true,'<ul></ul>'
			pagNums:false,
			slideshow:5000,
			numStatus:false,
			banners:'custom',    // false 'fromLeft', 'fromRight', 'fromTop', 'fromBottom', 'fade'
			waitBannerAnimation:true,
			bannerEasing:'easeInOutExpo',
			bannerDuration:1000
			//progressBar:'<div class="progbar"></div>'
	});
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 15,
		verticalDragMinHeight: 140,
		verticalDragMaxHeight: 140
	});	
	
	
	
	//content switch	
	//$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',left:-700});
		   //content.css({display:'none',opacity:0});
        },
        actFu:function(_){
			if(_.n>_.pren){
				//console.log("down");
				if(_.curr){
	                _.curr.css({display:'block', left:-700}).stop().animate({left:0},800, 'easeInOutExpo');	                
	            }   
	    		if(_.prev){
	  		        _.prev.stop().animate({left:700},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
	            }	
			}
			else{
				//console.log("up");
				if(_.curr){
	                _.curr.css({display:'block', left:700}).stop().animate({left:0},800, 'easeInOutExpo');	                
	            }   
	    		if(_.prev){
	  		        _.prev.stop().animate({left:-700},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
	            }	
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			/*if (_.pren == undefined){
                _.pren = -1;
                hideSplashQ();
            }*/
			if ( (_.pren == undefined) && (_.n >= 1) ){  //if at start loading subpage (_.n >= 0)
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			$('.txt1',li).stop().animate({top:50},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:0},400, 'easeOutExpo');
        },
        hoverOut:function(li){			
			$('.txt1',li).stop().animate({top:0},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:-50},400, 'easeOutExpo');  
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	
	var h_cont=740;
	function centre(e) {
		var h=$(document).height()-0;
		if (h>h_cont) {
			m_top=~~(h-h_cont)/2+0;
		} else {
			m_top=0;
		}
		$('.main1').stop().animate({paddingTop:m_top}, e);
	}
	centre(0);
	$(window).resize(function(){ centre(400); } 	);
	//centre(0);
	//setInterval(centre,1);
	//$(window).resize(function(){ centre(400); } 	);

	
	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});

	}, 0);
	startSite();  
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});