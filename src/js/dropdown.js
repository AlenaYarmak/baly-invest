document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const selected = document.querySelector('.dropdown__selected');
    const options = document.querySelector('.dropdown__options');

    // Toggle dropdown
    selected.addEventListener('click', () => {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
        
        if (selected.classList.contains('dropdown__selected-active')) {
            selected.classList.remove('dropdown__selected-active');
        } else {
            selected.classList.add('dropdown__selected-active');
        }
    });

    // Update selected value and close dropdown
    document.querySelectorAll('.dropdown__option').forEach(option => {
        option.addEventListener('click', (event) => {
            selected.textContent = event.target.textContent;
            selected.classList.remove('dropdown__selected-active');
            options.style.display = 'none';
        });
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            options.style.display = 'none';
            selected.classList.remove('dropdown__selected-active');
        }
    });
});
