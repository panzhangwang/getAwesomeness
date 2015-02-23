$(document).ready(function() {
	$('#keys').tagsInput({
		'defaultText':'add a key',
    'height':'150px',
    'width':'360px'
  });
  $('#sidebar').affix({
    offset: {
      top:100,
      bottom:0
    }
	});
	$('#sidebar').on('affixed.bs.affix', function(){
	    $(this).removeAttr('style');
	});
	$('.toc').toc({
		'selectors': 'h1,h2,h3,h4',
		'container': 'article'
	});
});