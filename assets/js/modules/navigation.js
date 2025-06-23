// Navigation Module
export const initNavigation = () => {
    const header = document.querySelector('#header');
    const nav = document.querySelector('#headmn');
    let lastScroll = 0;

    // Handle scroll events
    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    };

    // Handle submenu hover
    const handleSubmenuHover = () => {
        const menuItems = nav.querySelectorAll('.lnb1, .lnb2');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
            });
            
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
            });
        });
    };

    // Initialize
    window.addEventListener('scroll', handleScroll);
    handleSubmenuHover();
}; 