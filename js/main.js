// JavaScript code to implement dropdown menu functionality for the navigation items

document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        // Add event listener for hover
        dropdown.addEventListener('mouseenter', function() {
            this.classList.add('show');
        });

        dropdown.addEventListener('mouseleave', function() {
            this.classList.remove('show');
        });

        // Add event listener for click
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                dropdown.classList.toggle('show');
            });
        }
    });
});