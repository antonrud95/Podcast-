$(document).ready(function() {
    $('.navigation__burger').click(function(event) {
        $('.navigation__burger,.navigation__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});