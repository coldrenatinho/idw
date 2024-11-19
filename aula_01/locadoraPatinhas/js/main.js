document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
      event.preventDefault();
      var dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Fechar o dropdown se clicar fora dele
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      var dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
      });
    }
  });
});

function newWindow(url) {
    window.open(url, '_blank'); 
    console.log('Nova janela aberta');
}
