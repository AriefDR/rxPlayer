var slider_wrap = $('.wrap-slider div ul')
var slider_items = $('.wrap-slider div ul li')
var slider_item_length = slider_items.length
var slider_item_width = 250
var slider_width = slider_item_length * slider_item_width
var btn_next = $('.slider-arrow-right')
var btn_prev = $('.slider-arrow-left')
var current_section_index = 0
var touchX = 0

$('.slider-arrow-right').on('click', function () {
    moveSlider(+1)
})
$('.slider-arrow-left').on('click', function () {
    moveSlider(-1)
})

$('.slider-responsive').on('touchstart', function (e) {
    var touch = e.originalEvent.touches[0]
    touchX = touch.pageX
}).on('touchend touchcancel', function (e) {
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
        touchGap = touch.pageX - touchX;

    if (touchGap > 5) { //swipe right
        btn_prev.trigger('click');
    }
    if (touchGap < -5) { //swipe left
        btn_next.trigger('click');
    }
})

$(window).on('resize', function (e) {
    current_section_index = 0;
    moveSlider(-0);
}).trigger('resize')

slider_wrap.width(slider_width);

function moveSlider(direction) {
    var distance = $('.slider-responsive').width()
    var sections = Math.ceil(slider_width / distance)
    var remainder = slider_item_length % (distance / slider_item_width)
    var translateX = 0;

    current_section_index += direction;

    if (current_section_index <= 0) {
        current_section_index = 0
        btn_prev.addClass('.slider-arrow-disable')
        btn_next.removeClass('.slider-arrow-disable')
        translateX = 0
    } else if (current_section_index >= sections - 1) {
        var rollbackIndex;

        current_section_index = sections - 1;
        rollbackIndex = remainder !== 0 ? current_section_index - 1 : current_section_index;

        btn_prev.removeClass('.slider-arrow-disable')
        btn_next.addClass('.slider-arrow-disable')
        translateX = -(distance * rollbackIndex + remainder * slider_item_width);
    } else {
        btn_prev.removeClass('.slider-arrow-disable')
        btn_next.removeClass('.slider-arrow-disable')
        translateX = -distance * current_section_index;
    }
    slider_wrap.css(getCSSTransformObj(translateX));
}

function getCSSTransformObj(x) {
    return {
        '-webkit-transform': 'translateX(' + x + 'px)',
        '-moz-transform': 'translateX(' + x + 'px)',
        '-ms-transform': 'translateX(' + x + 'px)',
        '-o-transform': 'translateX(' + x + 'px)',
        'transform': 'translateX(' + x + 'px)'
    };
}