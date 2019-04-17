//requires jquery and javascript
$(document).ready(function () {

    $("#genx").hide();
    $("#millennial").hide();
    $("#genz").hide();

    $('body').removeClass(".hidepage").fadeIn(3500);

    $('#genxm').click(function () {
        $("#genx").slideToggle();
        $("#millennial").slideUp();
        $("#genz").slideUp();
    });

    $('#millennialm').click(function () {
        $("#genx").slideUp();
        $("#millennial").slideToggle();
        $("#genz").slideUp();
    });

    $('#genzm').click(function () {
        $("#genx").slideUp();
        $("#millennial").slideUp();
        $("#genz").slideToggle();
    });


    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');

        // create new image object to use as pattern
        var img = new Image();
        img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
        img.onload = function () {

            // create pattern
            var ptrn = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = ptrn;
            ctx.fillRect(0, 0, 200, 150);

        }
    }
    draw();



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
                // Add the "0" digit to the front
                // so 9 becomes "09"
                seconds = "0" + seconds;
            }
            // If the minutes digit is less than ten
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            // If the hours digit is less than ten
            if (hours < 10) {
                hours = "0" + hours;
            }
            //if days=0, show docs

            document.getElementById("capsule").innerHTML = days + ":" + hours + ":" +
                minutes + ":" + seconds + "";
        });
    }
    displayTime();
    draw();
});
