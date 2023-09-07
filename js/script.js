function navigateTo(section) {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Sobre').style.display = 'none';
    document.getElementById('Projetos').style.display = 'none';
    document.getElementById('Contatos').style.display = 'none';
   
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.style.display = 'flex';
        document.title = `${section} | Bê Developer`;
     }
}

