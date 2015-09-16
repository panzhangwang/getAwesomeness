$(document).ready(function() {
	$.material.init();
	$("#toTop").scrollToTop();
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

	$.get('/json/list', function(data){
    $("#typeahead").typeahead({ source:data });
	},'json');

	var $input = $('#typeahead');
	$input.change(function() {
    var current = $input.typeahead("getActive");
    if (current) {
      if (current.name == $input.val()) {
      	window.location.href = '/get/' + current.key;
      }
    }
	});
});