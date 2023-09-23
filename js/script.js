function isSmallScreen() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function navigateTo(section) {
  document.getElementById('Home').style.display = 'none';
  document.getElementById('Sobre').style.display = 'none';
  document.getElementById('Projetos').style.display = 'none';
  document.getElementById('Contatos').style.display = 'none';
  
  const hamburgerButton = document.getElementById("hamburger-button");
  const windowDiv = document.getElementById("window");
  const targetSection = document.getElementById(section);
  const home = document.getElementById("Home")

  if (targetSection) {
    targetSection.style.display = 'flex';
    document.title = `${section} | Bê Developer`;
  }
  
  if (isSmallScreen()) {
    if (section === 'Sobre' || section === 'Projetos') {
      windowDiv.style.display = "none";
      hamburgerButton.style.display = "block";

    }
    if (section === 'Home' || section === 'Contatos') {
      hamburgerButton.style.display = "none";
      home.style.height = "50vh";
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerButton = document.getElementById("hamburger-button");
  const windowDiv = document.getElementById("window");
  
  hamburgerButton.addEventListener("click", function() {
    if (isSmallScreen()) {
      if (windowDiv.style.display === "none" || windowDiv.style.display === "") {
        windowDiv.style.display = "flex"; 
      } else {
        windowDiv.style.display = "none";
      }
    }
  });
});

