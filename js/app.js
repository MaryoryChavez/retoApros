//$(document).foundation();

$(document).ready(init);

function init() {
    tachadoMenu();
}

function tachadoMenu() {
    console.log("tachado");
    $('#ingles').click(function () {
        $(this).addClass('tachar');
        $('#español').removeClass('tachar');
    });
    $('#español').click(function () {
        $(this).addClass('tachar');
        $('#ingles').removeClass('tachar');
    });
}
