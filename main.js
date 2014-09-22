$(document).on('ready', function() {

var outer_shell = $('<div class="outer-shell"></div>');
var inner_shell = $('<div class="inner-shell"</div>');

	// $('.container').css({
	// 	'height': '100%',
	// 	'width': '100%'
	// })

	// outer_shell.css({
	// 	'height': 400,
	// 	'width': 650,
	// 	backgroundColor: 'darkgrey',
	// 	'margin': '20%'
	// })
	$('.container').append(outer_shell);
  
	// inner_shell.css({
	// 	'height': 350,
	// 	'width': 600,
	// 	backgroundColor: 'black'
	// })
	outer_shell.append(inner_shell);

});