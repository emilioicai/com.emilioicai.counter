var initialValue = value = 2;
var numberHeight = 50;
var cb;
var scrollUnit;

_.each($.count.children, function(child){
	child.height = numberHeight;
});

$.count.addEventListener('postlayout', function(){
	Ti.API.info('contentHeight ' + $.count.contentHeight);
	Ti.API.info('$.count.children.length ' + $.count.children.length);
	Ti.API.info('Ti.Platform.displayCaps.dpi ' + Ti.Platform.displayCaps.dpi);
	scrollUnit = (OS_IOS) ? numberHeight : numberHeight * (Ti.Platform.displayCaps.dpi / 160);
	$.count.scrollTo(0, scrollUnit/2 + scrollUnit);
});

$.shader.image = WPATH('/shader.png');

function increaseCount(){
	if(value === $.count.children.length - 2) return;
	++value;
	$.count.scrollTo(0, scrollUnit/2 + scrollUnit * (value - 2) + scrollUnit);
	if(typeof cb === "function") cb(value);
}

function decreaseCount(){
	if(value === 1) return;
	--value;
	$.count.scrollTo(0, scrollUnit/2 + scrollUnit * (value - 2) + scrollUnit );
	if(typeof cb === "function") cb(value);
}

function getCount(){
	return value;
}

function init(config){
	if(typeof config.onChange === "function") cb = config.onChange;
	if(typeof config.onLoad === "function") config.onLoad(value);
}

exports.increaseCount = increaseCount;
exports.init = init;
exports.decreaseCount = decreaseCount;
exports.getCount = getCount;