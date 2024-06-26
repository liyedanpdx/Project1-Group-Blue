
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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })



