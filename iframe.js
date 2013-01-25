$(document).ready(main);

function main()
{
  $('iframe').attr('src', getIframeUrl() );
	registerEvents();
	resizeIframe();
}

function getIframeUrl()
{
	var url = window.location.href;
	var iframe_url = 'http://www.nowaythatthereissomethinghere.com';
	var param_start = url.indexOf("iframe=");
	if( param_start != -1 )
		iframe_url = url.substr(param_start+7,url.length-param_start-7);
	if( iframe_url.indexOf("http://") == -1)
		iframe_url = "http://" + iframe_url;

	return iframe_url;
}
