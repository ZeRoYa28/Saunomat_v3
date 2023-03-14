// Set the date to count down to
var countDownDate = new Date("mar 15, 2023 01:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {
		  
// Get the current date and time
var now = new Date().getTime();
		  
// Calculate the time remaining
var distance = countDownDate - now;
		  
// Calculate days, hours, minutes, and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
// Output the countdown
document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		  
// If the countdown is over, show the message
if (distance < 0) {
	clearInterval(x);
		document.getElementById("countdown").innerHTML = "ABGELEUFEN";
		}
}, 1000);