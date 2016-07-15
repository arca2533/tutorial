/*=======================================================
						Rollover
=======================================================*/
jQuery(document).ready(function($) {
    $("img.imgover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_over$2"))

    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_over(\.[a-z]+)$/, "$1$2"))
    })
})

/*=======================================================
						Popup
=======================================================*/
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
/*=======================================================
					HEIGHTLINE
 =======================================================*/
(function( $ ) {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winW = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winW <= 360){
				column.removeAttr( 'style' );		
			}else{
				column.css( 'height', 'auto' );
				//Loop all the column
				column.each( function() {
					//Store the highest value
					if( $( this ).height() > maxHeight ) {
					maxHeight = $( this ).height();
				}
				});
				//Set the height
				column.height( maxHeight );
			}
		}
		setHeight();		
		$(window).resize( function() {
			setHeight();
		});
	};
}( jQuery ));

/*=======================================================
						GNAV
=======================================================*/
jQuery(document).ready(function($) {
    $open=false;
	function menuMb() {
		$("#gnavisp ul").slideToggle();
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
	
	$('#btn_menu').toggle(function() {
		$('#gnav ul li').slideDown();
		$('#gnavisp .close').show();
		$('#gnavisp .open').hide();
	  }, function() {
		$('#gnav ul li').slideUp();
		$('#gnavisp .close').hide();
		$('#gnavisp .open').show();
	  });
	$('#gnavisp ul li').click(function(){
		$('#gnav ul li').hide();
		$('#gnavisp .close').show();
		$('#gnavisp .open').hide();
	});	
	
	$('#gnavisp #btn_menu').click(function() {
		menuMb();
	});
	
	
});

/*  Pagetop
===========================================*/
$(document).ready(function(){

	// hide #back-top first
	$("#page-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#page-top').fadeIn();
			} else {
				$('#page-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#page-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

/*=======================================================
				   CANH GIUA THEO CHIEU CAO
=======================================================*/
$(window).load(function() {
	function setSubject() {
		var winWSub = $(window).width();
		$('.subject').each(function(){
			var subjectImgH = $(this).find('.subject_img').height(); 
			var subjectTxtH = $(this).find('.subject_txt').height(); 
			if(winWSub > 640){
				if(subjectImgH > subjectTxtH){
					$(this).find('.subject_txt').css({'padding-top':(subjectImgH - subjectTxtH)/2 + 'px'});
				}else if(subjectImgH < subjectTxtH){
					$(this).find('.subject_img').css({'padding-top':(subjectTxtH - subjectImgH)/2 + 'px'});
				}else{
					$(this).find('.subject_img').css({'padding-top':0});
					$(this).find('.subject_txt').css({'padding-top':0});
				}
			}
		})
	}
	setSubject();  
	$(window).resize( function() {
		setSubject();
	});
});
