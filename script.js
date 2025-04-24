document.addEventListener('DOMContentLoaded', function() {
    // Add Font Awesome if not already included
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }
    
    // Get DOM elements
    const sidebar = document.getElementById('customSidebar');
    const sidebarToggle = document.getElementById('customSidebarToggle');
    const closeSidebar = document.getElementById('closeCustomSidebar');
    const sidebarOverlay = document.getElementById('customSidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.custom-sidebar-nav a');
    
    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }
    
    // Function to close sidebar
    function closeSidebarFunc() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
    
    // Event listeners
    sidebarToggle.addEventListener('click', openSidebar);
    closeSidebar.addEventListener('click', closeSidebarFunc);
    sidebarOverlay.addEventListener('click', closeSidebarFunc);
    
    // Close sidebar when a link is clicked (on mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeSidebarFunc();
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // On desktop, we add a class to the body
            document.body.classList.add('has-sidebar');
            document.body.classList.remove('sidebar-open');
        } else {
            // On mobile, we remove the body class
            document.body.classList.remove('has-sidebar');
            
            // Close the sidebar when resizing from desktop to mobile
            if (sidebar.classList.contains('open')) {
                closeSidebarFunc();
            }
        }
    });
    
    // Initial check for desktop/mobile
    if (window.innerWidth > 768) {
        document.body.classList.add('has-sidebar');
    }
    
    // Handle keyboard navigation (Escape key closes sidebar)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebarFunc();
        }
    });
});