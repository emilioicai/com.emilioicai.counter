var initialValue = value = 2;
var numberHeight = 80;
var cb;
var scrollUnit;
var centerFactor = 1.95;

_.each($.count.children, function(child){
	child.height = numberHeight;
});

$.count.addEventListener('postlayout', function(){
	scrollUnit = (OS_IOS) ? numberHeight : numberHeight * (Ti.Platform.displayCaps.dpi / 160);
	$.count.scrollTo(0, scrollUnit * centerFactor);
});

// $.shader.image = WPATH('/shader.png');

function increaseCount(){
	if(value === $.count.children.length - 2) return;
	++value;
	$.count.scrollTo(0, scrollUnit * (value - 2) + scrollUnit * centerFactor);
	if(typeof cb === "function") cb(value);
}

function decreaseCount(){
	if(value === 1) return;
	--value;
	$.count.scrollTo(0, scrollUnit + scrollUnit * (value - 2) + scrollUnit * centerFactor / 2 );
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