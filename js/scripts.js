$(document).ready(function(){
	var counter 	= 3;
	var dt 			= new Date();
	var h			= dt.getHours();
	var m			= dt.getMinutes();
	var s			= dt.getSeconds();
	var milli 		= dt.getMilliseconds();
	var timeOut;
	var cd;

	$("#startGame").click(function(){
		startCountDown();
	});

	function startCountDown(){

		cd = setInterval(function(){
			 console.log(counter);
			 $("#startGame").html( counter );
			 counter--;
		} , 1000);

		timeOut = setTimeout( function(){
			console.log("TIME's UP!");
			clearInterval( cd );
			hideStart();
			showClock();
		}, 4000);

	}

	function showClock(){
		$("#clock").show();
	}

	function hideStart(){
		$("#startGame").hide()
	}

	var timer = setInterval( function(){
		giveMeTheTime();
		}, 1 );

	function giveMeTheTime(){
		dt = new Date();
		h  = dt.getHours();
		m  = dt.getMinutes();
		s  = dt.getSeconds();
		milli = dt.getMilliseconds();

		$("#h").html( h );
		$("#m").html( m );
		$("#s").html( s );
		$("#milli").html( milli );

	}
});