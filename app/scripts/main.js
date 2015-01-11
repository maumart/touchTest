(function(){
	'use strict';

	var ctaButton = document.querySelector('.button-cta');
	var resetButton = document.querySelector('.button-reset');
	var eventListDd = document.querySelectorAll('.list-eventList > dd');
	var eventArray = [];
		
	// touchstart
	ctaButton.addEventListener('touchstart', function(event){
		console.log('touchstart', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// touchmove
	ctaButton.addEventListener('touchmove', function(event){
		console.log('touchmove', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// touchend
	ctaButton.addEventListener('touchend', function(event){
		console.log('touchend', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// mouseenter
	ctaButton.addEventListener('mouseenter', function(event){
		console.log('mouseenter', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);
	
	// mouseover
	ctaButton.addEventListener('mouseover', function(event){
		console.log('mouseover', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);	

	// mousemove
	ctaButton.addEventListener('mousemove', function(event){
		console.log('mousemove', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);	

	// mousedown
	ctaButton.addEventListener('mousedown', function(event){
		console.log('mousedown', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);
	
	// mouseup
	ctaButton.addEventListener('mouseup', function(event){
		console.log('mouseup', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// click
	ctaButton.addEventListener('click', function(event){
		console.log('click', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// mouseleave
	ctaButton.addEventListener('mouseleave', function(event){
		console.log('mouseleave', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// MS Events

	// pointerdown
	ctaButton.addEventListener('pointerdown', function(event){
		console.log('pointerdown', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// pointerenter
	ctaButton.addEventListener('pointerenter', function(event){
		console.log('pointerenter', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// pointerleave
	ctaButton.addEventListener('pointerleave', function(event){
		console.log('pointerleave', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// pointermove
	ctaButton.addEventListener('pointermove', function(event){
		console.log('pointermove', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// pointerout
	ctaButton.addEventListener('pointerout', function(event){
		console.log('pointerout', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// pointerover
	ctaButton.addEventListener('pointerover', function(event){
		console.log('pointerover', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	// pointerup
	ctaButton.addEventListener('pointerup', function(event){
		console.log('pointerup', event.timeStamp);
		eventArray.push(event);
		digestCycle();
	} , false);

	
	var digestCycle = function(){
		var eventArrayLength = eventArray.length;
		var eventType;
		var currentEventLi;

		for (var i = 0; i < eventArrayLength; i++) {
			eventType = eventArray[i].type;

			currentEventLi = document.querySelector('.list-eventList > dt[data-eventtype='+ eventType +'] + dd');

			if (currentEventLi !== null) {
				currentEventLi.innerHTML = i;				
			}			
		}
	};

	resetButton.addEventListener('click', function(){
		var eventListDdLength = eventListDd.length;
		eventArray.length = 0;

		for (var i = 0; i < eventListDdLength; i++) {
			eventListDd[i].innerHTML = '<!--#-->';
		}
	});

})();