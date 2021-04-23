import './style.scss'

jQuery(($) => {
    const sliderTop = $('.slider-top')
    let top_item_width = sliderTop.children().outerWidth()
    const sliderBottom = $('.slider-bottom')
    let bottom_item_width = sliderBottom.children().outerWidth()
    const btnPrev = $('.arrows-left')
    const btnNext = $('.arrows-right')
    
    if(sliderTop.children("li").length > 1) {
        btnPrev.on("click", () => {
            sliderTop.children("li:last").prependTo(sliderTop);
            sliderTop.css("left", - top_item_width);
            sliderTop.animate({
                left: 0
            }, 300, "linear");
        });

        btnNext.on("click", () => {
            sliderTop.animate({
                left: - top_item_width
            }, 300, "linear", () => {
                sliderTop.children("li:first").appendTo(sliderTop);
                sliderTop.css("left", 0);
            });
        });
    }     
    
    if(sliderBottom.children("li").length > 1) {
        btnPrev.on("click", () => {
            sliderBottom.children("li:last").prependTo(sliderBottom);
            sliderBottom.css("left", - bottom_item_width);
            sliderBottom.animate({
                left: 0
            }, 300, "linear");
        });

        btnNext.on("click", () => {
            sliderBottom.animate({
                left: - bottom_item_width
            }, 300, "linear", () => {
                sliderBottom.children("li:first").appendTo(sliderBottom);
                sliderBottom.css("left", 0);
            });
        });
    }
})