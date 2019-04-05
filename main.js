<<<<<<< HEAD
//requires jquery and javascript
$(document).ready(function () {
    function displayTime() {

        var countDownDate = new Date("April 17, 2029 15:00:00").getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            //if days=0, show docs

            document.getElementById("capsule").innerHTML = days + ":" + hours + ":" +
                minutes + ":" + seconds + "";
        });
    }
    displayTime();
});
=======
//requires jquery and javascript
$(document).ready(function () {
    function displayTime() {

        var countDownDate = new Date("April 17, 2029 15:00:00").getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            //if days=0, show docs

            document.getElementById("capsule").innerHTML = days + ":" + hours + ":" +
                minutes + ":" + seconds + "";
        });
    }
    displayTime();
});
>>>>>>> 9f70c8d93783d204e844e878a1777315528607b8
