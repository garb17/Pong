$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        document.getElementById("logo").src="assets/img/logo.png";
    } else {
        $('.nav').removeClass('affix');
        document.getElementById("logo").src="assets/img/logo.invertido.png";
    }
});