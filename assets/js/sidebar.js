document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const content = document.getElementById('content');
    const overlay = document.getElementById('sidebar-overlay');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        if (content) content.classList.toggle('active');
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
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }

    // IMPORTANT: Remove all previous event handlers by cloning and replacing section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
        
        // Add our new click handler with proper prevention
        newHeader.addEventListener('click', function(e) {
            // Prevent default navigation - section headers should only expand/collapse
            e.preventDefault();
            e.stopPropagation();
            
            const parentSection = this.closest('.section-item');
            if (!parentSection) return;

            // Simple toggle for dropdown behavior
            const isOpen = parentSection.classList.contains('open');
            
            if (!isOpen) {
                // Opening the section
                parentSection.classList.add('open');
                parentSection.setAttribute('aria-expanded', 'true');
                
                const submenu = parentSection.querySelector('ul');
                if (submenu) {
                    // Make visible before animation
                    submenu.style.visibility = 'visible';
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    submenu.style.opacity = '1';
                }
            } else {
                // Closing the section
                parentSection.classList.remove('open');
                parentSection.setAttribute('aria-expanded', 'false');
                
                const submenu = parentSection.querySelector('ul');
                if (submenu) {
                    submenu.style.maxHeight = '0';
                    submenu.style.opacity = '0';
                    
                    // Wait for transition before hiding completely
                    setTimeout(function() {
                        if (!parentSection.classList.contains('open')) {
                            submenu.style.visibility = 'hidden';
                        }
                    }, 300); // Match transition time
                }
            }
            
            // Save state to localStorage
            localStorage.setItem(`submenu-${parentSection.id}`, !isOpen);
        });
    });

    // Initialize sections based on localStorage after a slight delay
    setTimeout(() => {
        document.querySelectorAll('.section-item.has-submenu').forEach(section => {
            const isOpen = localStorage.getItem(`submenu-${section.id}`) === 'true';
            if (isOpen) {
                section.classList.add('open');
                section.setAttribute('aria-expanded', 'true');
                const submenu = section.querySelector('ul');
                if (submenu) {
                    submenu.style.visibility = 'visible';
                    submenu.style.opacity = '1';
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                }
            }
        });
        
        // If we have an active item, expand its parent section
        const activeItem = document.querySelector('.components li.active');
        if (activeItem) {
            const parentSection = activeItem.closest('.section-item.has-submenu');
            if (parentSection && !parentSection.classList.contains('open')) {
                parentSection.classList.add('open');
                parentSection.setAttribute('aria-expanded', 'true');
                const submenu = parentSection.querySelector('ul');
                if (submenu) {
                    submenu.style.visibility = 'visible';
                    submenu.style.opacity = '1';
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                }
                localStorage.setItem(`submenu-${parentSection.id}`, 'true');
            }
        }
    }, 100);

    // Search Functionality
    const sidebarSearch = document.getElementById('sidebarSearch');
    if (sidebarSearch) {
        sidebarSearch.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            
            // For each section
            document.querySelectorAll('.section-item').forEach((section) => {
                let sectionHasMatch = false;
                const sectionItems = section.querySelectorAll('li');
                
                // Check items in this section
                sectionItems.forEach((item) => {
                    const text = item.textContent.toLowerCase();
                    const matches = text.includes(query);
                    item.style.display = matches ? 'block' : 'none';
                    if (matches) sectionHasMatch = true;
                });
                
                // Show/hide section based on matches
                section.style.display = sectionHasMatch || query === '' ? 'block' : 'none';
                
                // If there's a match and section has submenu, expand it
                if (sectionHasMatch && query !== '' && section.classList.contains('has-submenu')) {
                    section.classList.add('open');
                    section.setAttribute('aria-expanded', 'true');
                    const submenu = section.querySelector('ul');
                    if (submenu) {
                        submenu.style.visibility = 'visible';
                        submenu.style.opacity = '1';
                        submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    }
                }
            });
        });
    }

    // Handle section height recalculation to avoid text overlap
    function updateSubmenuHeights() {
        document.querySelectorAll('.section-item.has-submenu.open').forEach((item) => {
            const submenu = item.querySelector('ul');
            if (submenu) {
                // Reset height before calculating to get accurate scrollHeight
                const originalMaxHeight = submenu.style.maxHeight;
                submenu.style.maxHeight = 'none';
                // Add a small padding to ensure no overlap
                submenu.style.maxHeight = (submenu.scrollHeight + 10) + 'px';
            }
        });
    }

    // Update submenu heights on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            overlay.classList.remove('active');
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (content) content.classList.remove('active');
            }
        }
        
        // Recalculate all open submenu heights to prevent overlapping
        updateSubmenuHeights();
    });

    // Initial height calculation
    updateSubmenuHeights();

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active') && window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
});