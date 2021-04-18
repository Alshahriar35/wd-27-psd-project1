$('.owl-carousel').owlCarousel({
    items:4,
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="false"></i>','<i class="fa fa-angle-right" aria-hidden="false"></i>'],
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
});