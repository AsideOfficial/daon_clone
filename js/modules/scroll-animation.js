// Scroll Animation Module
export const initScrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add animation classes based on data attributes
    const addAnimationClasses = () => {
        animatedElements.forEach(element => {
            const animationType = element.dataset.animation || 'fade-in';
            const delay = element.dataset.delay || '0';
            
            element.style.animationDelay = `${delay}ms`;
            element.classList.add(animationType);
        });
    };

    // Initialize
    addAnimationClasses();
}; 