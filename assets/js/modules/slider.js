// Slider Module
export const initSlider = (element) => {
    const slider = $(element);
    const dots = $('.control_box .dots .item');
    const paging = $('.control_box .paging');
    const prevBtn = $('.control_box .controller .prev');
    const nextBtn = $('.control_box .controller .next');
    const playBtn = $('.control_box .controller .play');
    const stopBtn = $('.control_box .controller .stop');
    
    let autoplayInterval;
    const autoplayDelay = 5000;

    // Initialize Slick Slider
    slider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: autoplayDelay,
        prevArrow: prevBtn,
        nextArrow: nextBtn
    });

    // Update dots and paging
    const updateControls = () => {
        const currentSlide = slider.slick('slickCurrentSlide');
        const totalSlides = slider.slick('getSlick').slideCount;
        
        dots.removeClass('active');
        dots.eq(currentSlide).addClass('active');
        
        paging.find('.this').text(currentSlide + 1);
        paging.find('.total').text(totalSlides);
    };

    // Handle autoplay
    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            slider.slick('slickNext');
        }, autoplayDelay);
        
        playBtn.hide();
        stopBtn.show();
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
        playBtn.show();
        stopBtn.hide();
    };

    // Event Listeners
    slider.on('beforeChange', updateControls);
    slider.on('afterChange', updateControls);
    
    playBtn.on('click', startAutoplay);
    stopBtn.on('click', stopAutoplay);
    
    dots.on('click', function() {
        const index = $(this).index();
        slider.slick('slickGoTo', index);
    });

    // Initialize
    updateControls();
    startAutoplay();
}; 