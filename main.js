(function ($) {
    let isAnimating = false;
    let lastScrollTop = $(window).scrollTop();
    document.addEventListener('wheel', function(e) {
        let scrollTo = e.wheelDelta;

        let direction = "down";
        if (e.wheelDelta >= 0) {
            direction = "up";
        }

        if (!isAnimating) {
            isAnimating = true;
            setTimeout(() => {
                fullPageAnimate(direction, 500);
            }, 1000);
        }
    });

    function fullPageAnimate(direction = "down", duration = 1000) {
        let scrollOffset = $(window).height();
        if (direction === "up") {
            scrollOffset = -scrollOffset;
        }

        $('html,body').animate({
            scrollTop: lastScrollTop + scrollOffset
        }, duration, () => {
            isAnimating = false;
            lastScrollTop = $(window).scrollTop();
        });
    }

})(jQuery);