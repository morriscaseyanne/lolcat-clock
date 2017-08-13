var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17;
var napTime = lunchTime + 2; // 2PM
var oneSecond = 1000;

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeupTimeSelector = document.getElementById("wakeupTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {
var lolcatImage = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var timeEventJS = document.getElementById("timeEvent");

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://magsol.files.wordpress.com/2012/04/funny-cat-pictures-lolcats-its-morning.jpg";
    messageText = "IZ MORNING TIME";
} else if (time > evening) {
	image = "http://www.leex.info/wp-content/uploads/2014/09/Funny-Cat-Night-.jpg";
    messageText = "IZ EVENING TIME";
} else {
    messageText = "IZ AFTER NOON";
}

lolcatImage.src = image;
timeEventJS.innerText = messageText;

	showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime();
updateClock();
setInterval(updateClock, oneSecond);

var partyEvent = function() {
	if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
	} else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "PARTY OVER";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};
var wakeupEvent = function() {
	wakeupTime = wakeupTimeSelector.value;
};
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);
wakeupTimeSelector.addEventListener("change", wakeupEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
