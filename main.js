$(document).on('ready', function() {



var outer_shell = $('<div class="outer-shell"></div>');
var inner_shell = $('<div class="inner-shell"</div>');
var amfm = $('<div class="am-fm">AM<br>FM</div>');
var clock_screen = $('<div class="clock-screen"></div>');
var auto = $('<div class="au-to">AUTO</div>');
var pm = $('<div class="pm">PM</div>');
var pm_indicator = $('<div class="pm-indicator"</div>');
var clock_text = $('<div class="clock-text"></div>');
var am_freq = $('<div class="am-freq">53 60 70 90 110 140 170</div>');
var fm_freq = $('<div class="fm-freq">89 92 96 102 106 108</div>');
// var time = $('<p class="time"></p>')


var getTime = function(){
	var currentDate = new Date();
	var minutes = currentDate.getMinutes();
	var hours = currentDate.getHours();

	clock_text.text(hours + ':' + minutes);
};

// var time = setInterval(function(){getTime}, 1000);
setInterval(getTime, 1000);




$('.container').append(outer_shell);
outer_shell.append(inner_shell);
inner_shell.append(clock_screen);
inner_shell.append(amfm);
inner_shell.append(auto);
inner_shell.append(pm);
clock_screen.append(pm_indicator);
clock_screen.append(clock_text);
inner_shell.append(am_freq);
inner_shell.append(fm_freq);

// var mins = '';
// if(minutes < 10) {
// 	var mins = '0' + minutes;
// 	return mins;
// }else{
// 	return minutes;
// };




});