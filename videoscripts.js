$(document).ready(function () {


    sizeTheVideo();
    $(window).resize(function () {
        sizeTheVideo();
    });


    $('#buggin').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/buggin.mp4");
    });
    $('#bones').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/bones.mp4");
    });
    $('#crib').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/crib.mp4");
    });
    $('#oldschool').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/oldschool.mp4");
    });
    $('#going_postal').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/postal.mp4");
    });
    $('#dip').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/dip.mp4");
    });
    $('#iight').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/iight.mp4");
    });
    $('#shorts').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/shorts.mp4");
    });
    $('#f_bomb').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/f_bomb.mp4");
    });
    $('#fresh').click(function () {
        $("#mediaplayer").attr("src", "GenXvideos/fresh.mp4");
    });
    $('#woke').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/woke.mp4");
    });
    $('#ghost').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/ghost.mp4");
    });
    $('#gassed').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/gassed.mp4");
    });
    $('#woke').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/woke.mp4");
    });
    $('#fleek').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/fleek.mp4");
    });
    $('#finesse').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/finesse.mp4");
    });
    $('#fleek').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/fleek.mp4");
    });
    $('#yeet').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/yeet.mp4");
    });
    $('#finna').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/finna.mp4");
    });
    $('#ship_it').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/ship_it.mp4");
    });
    $('#fleek').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/fleek.mp4");
    });
    $('#lit').click(function () {
        $("#mediaplayer").attr("src", "Millennialvideos/lit.mp4");
    });
    $('#salty').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/salty.mp4");
    });
    $('#shook').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/shook.mp4");
    });
    $('#bussin').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/bussin.mp4");
    });
    $('#thirsty').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/thirsty.mp4");
    });
    $('#jakes').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/jakes.mp4");
    });
    $('#clipped').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/clipped.mp4");
    });
    $('#jawn').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/jawn.mp4");
    });
    $('#jit').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/jit.mp4");
    });
    $('#big_smoke').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/big_smoke.mp4");
    });
    $('#bop').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/bop.mp4");
    });
    $('#deep').click(function () {
        $("#mediaplayer").attr("src", "GenZvideos/deep.mp4");
    });
});


function sizeTheVideo() {
    // - 1.78 is the aspect ratio of the video
    // - This will work if your video is 1920 x 1080
    // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
    var aspectRatio = 1.78;

    var video = $('#innervideo');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight * aspectRatio;
    var halfNewWidth = newWidth / 2;

    //Define the new width and centrally align the video
    video.css({
        "width": newWidth + "px",
        "left": "50%",
        "margin-left": "-" + halfNewWidth + "px"
    });
}

