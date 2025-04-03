document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse'); // Assumes you have this button
    const content = document.getElementById('content'); // Assumes you have this element
    const overlay = document.getElementById('sidebar-overlay');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        content?.classList.toggle('active');
        if (window.innerWidth <= 768) {
            overlay.classList.toggle('active');
        } else {
            overlay.classList.remove('active');
        }
        if (sidebarCollapse) {
            sidebarCollapse.style.transform = sidebar.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }

    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', toggleSidebar);
    }
    overlay.addEventListener('click', toggleSidebar);

    // Swipe to Close (Mobile)
    let touchStartX = 0;
    sidebar.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    sidebar.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        if (touchStartX - touchX > 50 && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    // Accordion Navigation (Collapsed by Default)
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    hasSubmenu.forEach((element) => {
        const submenu = element.querySelector('ul');
        const sectionHeader = element.querySelector('.section-header');
        
        // Check localStorage or leave collapsed by default
        const isOpen = localStorage.getItem(`submenu-${element.id}`) === 'true';
        if (isOpen) {
            element.classList.add('open');
            element.setAttribute('aria-expanded', 'true');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        } else {
            element.classList.remove('open');
            element.setAttribute('aria-expanded', 'false');
            submenu.style.maxHeight = '0';
        }

        sectionHeader.addEventListener('click', function(e) {
            // Toggle only if clicking near the arrow
            if (e.offsetX > this.offsetWidth - 30) {
                e.preventDefault();
                element.classList.toggle('open');
                element.setAttribute('aria-expanded', element.classList.contains('open'));

                if (element.classList.contains('open')) {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                } else {
                    submenu.style.maxHeight = '0';
                }

                localStorage.setItem(`submenu-${element.id}`, element.classList.contains('open'));
            }
            // Otherwise, navigate to the section link
        });
    });

    // Active Item Highlighting (Expand Parent Section if Active)
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.components a');
    let bestMatch = { element: null, matchLength: 0 };

    menuLinks.forEach((link) => {
        const linkPath = link.getAttribute('href');
        if (linkPath) {
            if (currentPath === '/' && linkPath === '/') {
                link.parentElement.classList.add('active');
            } else if (currentPath.includes(linkPath) && linkPath !== '/') {
                const matchLength = linkPath.length;
                if (matchLength > bestMatch.matchLength) {
                    bestMatch = { element: link, matchLength };
                }
            }
        }
    });

    if (bestMatch.element) {
        bestMatch.element.parentElement.classList.add('active');
        const parentMenu = bestMatch.element.closest('.has-submenu');
        if (parentMenu) {
            parentMenu.classList.add('open');
            parentMenu.setAttribute('aria-expanded', 'true');
            const submenu = parentMenu.querySelector('ul');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            localStorage.setItem(`submenu-${parentMenu.id}`, 'true');
        }
        setTimeout(() => {
            bestMatch.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }

    // Search Functionality
    document.getElementById('sidebarSearch').addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.components li').forEach((item) => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? 'block' : 'none';
        });
    });

    // Debounced Resize Handler
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 768) {
            overlay.classList.remove('active');
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                content?.classList.remove('active');
            }
        }
    }, 250));

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active') && window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
});