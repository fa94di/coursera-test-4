$(function() {
    $("navbar-toggler").blur(function() {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navbarNav").collapse('hide');
        }
    });
});