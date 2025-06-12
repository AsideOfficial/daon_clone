// Main JavaScript Module
import { initNavigation } from './modules/navigation.js';
import { initSlider } from './modules/slider.js';
import { initScrollAnimation } from './modules/scroll-animation.js';
import { initMobileMenu } from './modules/mobile-menu.js';

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Navigation
    initNavigation();
    
    // Initialize Slider
    const sliderElement = document.querySelector('.visual .list');
    if (sliderElement) {
        initSlider(sliderElement);
    }
    
    // Initialize Scroll Animations
    initScrollAnimation();
    
    // Initialize Mobile Menu
    initMobileMenu();
    
    // Handle Window Resize
    const handleResize = debounce(() => {
        // Add resize handling logic here
    }, 250);
    
    window.addEventListener('resize', handleResize);
});

// Export for use in other modules
export { debounce }; 