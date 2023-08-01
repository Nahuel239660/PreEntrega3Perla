
// Obtén el elemento del botón del menú desplegable y el contenido del menú
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Agrega un evento clic al botón para mostrar u ocultar el menú desplegable
dropdownBtn.addEventListener('click', () => {
dropdownContent.classList.toggle('show');
});

// Cierra el menú desplegable si el usuario hace clic fuera de él
window.addEventListener('click', (event) => {
if (!event.target.matches('.dropbtn')) {
 if (dropdownContent.classList.contains('show')) {
   dropdownContent.classList.remove('show');
 }
}
});

const nav = document.querySelector('nav');
const stickyClass = 'sticky';

function toggleStickyNav() {
  if (window.innerWidth >= 1024) {
    if (window.scrollY > 0) {
      nav.classList.add(stickyClass);
    } else {
      nav.classList.remove(stickyClass);
    }
  } else {
    nav.classList.remove(stickyClass);
  }
}

window.addEventListener('scroll', toggleStickyNav);
window.addEventListener('resize', toggleStickyNav);

// Llamar a la función una vez al cargar la página para asegurar que el menú esté configurado correctamente
toggleStickyNav();
