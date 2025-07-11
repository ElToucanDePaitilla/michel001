// scripts/menu.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const btn    = document.querySelector('.nav-toggle');
    const nav    = document.querySelector('.site-nav');
  
    // Ouverture / fermeture du menu
    btn.addEventListener('click', () => {
      header.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  
    // Toggle sous-menus “Photos”
    document.querySelectorAll('.dropbtn').forEach(button => {
      button.addEventListener('click', e => {
        const item = e.currentTarget.closest('.nav__item.dropdown');
        item.classList.toggle('open');
      });
    });
  
    // Fermeture du menu au clic en dehors
    document.addEventListener('click', (e) => {
      if (
        header.classList.contains('open') &&
        !nav.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        header.classList.remove('open');
        document.body.classList.remove('menu-open');
        document.querySelectorAll('.nav__item.dropdown.open').forEach(item =>
          item.classList.remove('open')
        );
      }
    });
  });
  