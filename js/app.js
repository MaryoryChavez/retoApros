//$(document).foundation();

$(document).ready(init);

function init() {
    tachadoMenu();
}

$(window).load(function() {
    $('.flexslider').flexslider({
    	touch: true,
    	pauseOnAction: false,
    	pauseOnHover: false,
    });
  });

function tachadoMenu() {
    $('#ingles').click(function () {
        $(this).addClass('tachar');
        $('#español').removeClass('tachar');
    });
    $('#español').click(function () {
        $(this).addClass('tachar');
        $('#ingles').removeClass('tachar');
    });
}
