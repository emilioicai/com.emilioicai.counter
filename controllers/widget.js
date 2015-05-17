var initialValue = value = 2;
var numberHeight = 50;

_.each($.count.children, function(child){
	child.height = numberHeight;
});

_.defer(function(){
	$.count.scrollTo(0, numberHeight/2);
});

$.shader.image = WPATH('/shader.png');

function increaseCount(){
	if(value === $.count.children.length) return;
	++value;
	$.count.scrollTo(0, numberHeight/2 + numberHeight * (value - 2) );
}

function decreaseCount(){
	if(value === 1) return;
	--value;
	$.count.scrollTo(0, numberHeight/2 + numberHeight * (value - 2) );
}

function getCount(){
	return value;
}

exports.increaseCount = increaseCount;
exports.decreaseCount = decreaseCount;
exports.getCount = getCount;