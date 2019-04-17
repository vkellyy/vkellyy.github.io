//requires jquery and javascript
$(document).ready(function () {

    $("#genx").hide();
    $("#millennial").hide();
    $("#genz").hide();
    $("#blockchain").hide();

    $('body').removeClass(".hidepage").fadeIn(3500);

    var countDownDate = new Date("April 17, 2029 15:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    if (distance < 1) {
        $('#genxm').click(function () {
            $("#genx").slideToggle();
            $("#millennial").slideUp();
            $("#genz").slideUp();
            $("#blockchain").slideUp();
        });
        $('#millennialm').click(function () {
            $("#genx").slideUp();
            $("#millennial").slideToggle();
            $("#genz").slideUp();
            $("#blockchain").slideUp();
        });
        $('#genzm').click(function () {
            $("#genx").slideUp();
            $("#millennial").slideUp();
            $("#genz").slideToggle();
            $("#blockchain").slideUp();
        });
        $('#blockchainm').click(function () {
            $("#genx").slideUp();
            $("#millennial").slideUp();
            $("#genz").slideUp();
            $("#blockchain").slideToggle();
        });
    }

    displayTime();
    //    FillSlogan();
});


function displayTime() {
    var countDownDate = new Date("April 17, 2029 15:00:00").getTime();
    setInterval(function () {


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


        document.getElementById("capsule").innerHTML = "<span id='day'>" + days + "</span>" + ":" + hours + ":" +
            minutes + ":" + seconds + "";
    });
}

/*function FillSlogan() {
        var text = '';

        for (var i = 0; i < 5000; i++) {
            text += '  , ';
        }

        $('#Slogan').html(text);
    }*/
