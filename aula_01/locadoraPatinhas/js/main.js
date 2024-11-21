document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
  });

  // Fechar o dropdown se clicar fora dele
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-toggle")) {
      var dropdowns = document.querySelectorAll(".dropdown-menu");
      dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
      });
    }
  });

  // Chama a função para mudar a cor de fundo com base na hora
  changeBackgroundColorBasedOnTime();
});

function newWindow(url) {
  window.open(url, "_blank");
  console.log("Nova janela aberta");
}

function changeBackgroundColorBasedOnTime() {
  var currentHour = new Date().getHours();
  var body = document.body;
  var navLinks = document.querySelectorAll(".nav-link-li");

  if (currentHour >= 6 && currentHour < 12) {
    // Manhã
    body.style.backgroundColor = "#FFFAF0"; // Cor clara
    navLinks.forEach(function (link) {
      link.style.color = "#000000"; // Cor preta
    });
  } else if (currentHour >= 12 && currentHour < 18) {
    // Tarde
    body.style.backgroundColor = "#FFD700"; // Cor dourada
    navLinks.forEach(function (link) {
      link.style.color = "#000000"; // Cor preta
    });
  } else if (currentHour >= 18 && currentHour < 21) {
    // Noite
    body.style.backgroundColor = "#FF8C00"; // Cor laranja escura
    navLinks.forEach(function (link) {
      link.style.color = "#FFFFFF"; // Cor branca
    });
  } else {
    // Madrugada
    body.style.backgroundColor = "#2F4F4F"; // Cor escura
    navLinks.forEach(function (link) {
      link.style.color = "#FFFFFF"; // Cor branca
    });
  }
}
