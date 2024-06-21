// Footer: Dropdown button
document.addEventListener('DOMContentLoaded', function() {
    var dropdownLinks = document.querySelectorAll('.nav-link.dropdown-toggle');
    
    dropdownLinks.forEach(function(dropdownLink) {
        dropdownLink.addEventListener('show.bs.dropdown', function() {
            dropdownLink.classList.add('active-dropdown');
        });
        
        dropdownLink.addEventListener('hide.bs.dropdown', function() {
            dropdownLink.classList.remove('active-dropdown');
        });
    });
});