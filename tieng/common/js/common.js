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
						GNAV
=======================================================*/
jQuery(document).ready(function($) {
    $open=false;
	function menuMb() {
		$("#menu ul").slideToggle();
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
	$('#menu #btn_menu').click(function() {
		menuMb();
	});
});

/*=======================================================
				CHANGE IMG FROM PC TO SP
=======================================================*/
jQuery(document).ready(function($) {
	var elem = $(this);
	var imgSrc = $("img", elem).map(function() {
		return $(this).attr("src");
	});
	function changeImages() {
		var winWimg = $(window).width();
		for (var i = 0; i < imgSrc.length; i++) {
			var newImgSrc = imgSrc[i].substring(0, imgSrc[i].length - 4),
				getExp = imgSrc[i].slice(-3),
				newImg = newImgSrc + "_sp";
			if (getExp == "jpg") {
					newImg = newImg + "." + getExp;
				} else if (getExp == "gif") {
					newImg = newImg + "." + getExp;
				} else if (getExp == "png") {
					newImg = newImg + "." + getExp;
				}

			if (winWimg <= 736) {
					$("img.img736", elem).each(function() {
						$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
					});
				} else {
					$("img.img736", elem).each(function() {
						$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
					});
				}
		}
	}
	changeImages();
	$(window).resize(function() {
		changeImages();
	});
})

/*=======================================================
					HEIGHTLINE
 =======================================================*/
jQuery(document).ready(function($) {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winWlh = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winWlh <= 480){
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
});
