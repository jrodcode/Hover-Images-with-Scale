function imageColor() {
    $('.image-list li a').hover(function() {
            $(this).css('background-color', "#ffffff82");
            $(this).css('transition', ".5s");
        },
        function() {
            $(this).css('background-color', "#00000000");
        })
}

imageColor();

function imageScale() {
    $('.image-list li').hover(function() {
            $(this).css('transform', "scale(1.05)");
            $(this).css('transition', ".5s");
        },
        function() {
            $(this).css('transform', "scale(1)");
        })
}

imageScale();