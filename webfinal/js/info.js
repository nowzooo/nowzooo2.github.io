$(document).ready(function() {
    $('.tap').click(function() {
        var $tap = $(this).closest('.tap');
        var $click = $tap.find('.click');

        // .click 요소가 활성화될 때
        if (!$tap.hasClass('active')) {
            $click.css('max-height', '300px');
            $tap.addClass('active');
            $tap.find('.tap h2').hide(); // h2 요소 숨기기
        } else { // .click 요소가 비활성화될 때
            $click.css('max-height', '0');
            $tap.removeClass('active');
            $tap.find('h2').show(); // h2 요소 보이기
        }
    });
});