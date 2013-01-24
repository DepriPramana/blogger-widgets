jQuery.noConflict();
jQuery(document).ready(function(){
    jQuery('#md-facebook span.fb_share_no_count').removeClass('fb_share_no_count');
    jQuery('#md-facebook span.fb_share_count_inner').html('0');

	var mdstatus = 'closed';
	var dh = ((jQuery('#md-active-share-comment-marker').position().top)-(jQuery(window).height()/2));
	if (dh < 200) { dh = 200; }
	jQuery(document).scroll( function(){ 		
		if (((jQuery(window).scrollTop()) > dh) && jQuery('#md-share-window').css('top') == '-450px' && mdstatus == 'closed') {
			jQuery('#md-share-window').animate({
				top: '0px',
			}, 'slow' );
			mdstatus = 'opened';
		}
		else if ((jQuery(window).scrollTop() < dh) && jQuery('#md-share-window').css('top') == '0px' && mdstatus == 'opened'){
			jQuery('#md-share-window').animate({
				top: '-450px',
			}, 'slow' );
			mdstatus = 'closed';
		}  
	});
});
