document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Create a close button for the mobile menu
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>'; // Font Awesome X icon
    mainNav.prepend(closeBtn); // Add it to the beginning of the nav

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeBtn.addEventListener('click', () => {
        mainNav.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close menu when a navigation link is clicked (for smoother UX on single-page sites)
    document.querySelectorAll('.main-nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // --- FAQ Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling; // The content div

            // Close other open accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.querySelector('.accordion-header').classList.remove('active');
                    item.querySelector('.accordion-content').classList.remove('active');
                }
            });

            // Toggle the clicked accordion
            header.classList.toggle('active');
            accordionContent.classList.toggle('active');
        });
    });
});
