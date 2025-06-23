// Mobile Menu Module
export const initMobileMenu = () => {
    const menuButton = document.querySelector('.site-map');
    const mobileMenu = document.querySelector('#head_menu_all');
    const closeButton = document.querySelector('.control.close');
    const body = document.body;
    
    let isMenuOpen = false;

    // Toggle menu
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.add('active');
            body.style.overflow = 'hidden';
            menuButton.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    };

    // Handle submenu toggle
    const handleSubmenuToggle = (event) => {
        const submenuItem = event.target.closest('.lnb1, .lnb2');
        if (!submenuItem) return;

        const submenu = submenuItem.querySelector('.submenu');
        if (!submenu) return;

        event.preventDefault();
        
        const isOpen = submenuItem.classList.contains('active');
        
        // Close all other submenus
        document.querySelectorAll('.lnb1.active, .lnb2.active').forEach(item => {
            if (item !== submenuItem) {
                item.classList.remove('active');
                item.querySelector('.submenu').style.maxHeight = null;
            }
        });

        // Toggle current submenu
        submenuItem.classList.toggle('active');
        submenu.style.maxHeight = isOpen ? null : submenu.scrollHeight + 'px';
    };

    // Handle click outside
    const handleClickOutside = (event) => {
        if (isMenuOpen && !event.target.closest('#head_menu_all') && !event.target.closest('.site-map')) {
            toggleMenu();
        }
    };

    // Event Listeners
    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    mobileMenu.addEventListener('click', handleSubmenuToggle);
    document.addEventListener('click', handleClickOutside);

    // Handle window resize
    const handleResize = () => {
        if (window.innerWidth > 992 && isMenuOpen) {
            toggleMenu();
        }
    };

    window.addEventListener('resize', handleResize);
}; 