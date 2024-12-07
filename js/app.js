var typed = new Typed('#msgTyped', {
  strings: [
    'Revisa el PDE - Programa de Entrenamiento (Solo para instructores)',
    'Cuenta con PDI - Programa de Instrucción (Dirigido a Alumnos Pilotos)',
    'Consulta tus horarios actualizados.',
    'Revisa las novedades en tu portal!',
  ],
  typeSpeed: 70,
  loop: false,
  loopCount: Infinity,
});

const showSidenav = () => {
  const svgHamburger = document.getElementById("svg-hamburger");
  const svgXMark = document.getElementById("svg-x-mark");
  const navbar = document.querySelector(".menunav");

  if (svgXMark.classList.contains("hidden")) {
    
    const contentNavbarAccount = document.getElementById("content-navbar-account");
    const btnCloseContentNavbarAccount = document.getElementById("btn-close-content-navbar-account");
    const contentImageAccount = document.getElementById("content-image-account");
    if (!contentNavbarAccount.classList.contains('hidden')) {
      contentNavbarAccount.classList.add('hidden')
      btnCloseContentNavbarAccount.classList.add('hidden')
      contentImageAccount.classList.remove('hidden') 
    }

    navbar.classList.remove("hidden");
    svgHamburger.classList.add("hidden");
    svgXMark.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
    svgXMark.classList.add("hidden");
    svgHamburger.classList.remove("hidden");
  }
};

const showNavBarAccount = () => { 
  const contentNavbarAccount = document.getElementById("content-navbar-account");
  const btnCloseContentNavbarAccount = document.getElementById("btn-close-content-navbar-account");
  const contentImageAccount = document.getElementById("content-image-account");
  
  if (contentNavbarAccount.classList.contains("hidden")) {
    const svgHamburger = document.getElementById("svg-hamburger");
    const svgXMark = document.getElementById("svg-x-mark");
    const navbar = document.querySelector(".menunav");
    if (!navbar.classList.contains('hidden')) {
      navbar.classList.add("hidden");
      svgXMark.classList.add("hidden");
      svgHamburger.classList.remove("hidden");
    }

    contentNavbarAccount.classList.remove("hidden");
    btnCloseContentNavbarAccount.classList.remove('hidden')
    contentImageAccount.classList.add('hidden') 
  } else {
    contentNavbarAccount.classList.add("hidden");
    btnCloseContentNavbarAccount.classList.add('hidden')
    contentImageAccount.classList.remove('hidden') 
  }
};

const btnShowNavbarAccount = document.getElementById("btn-show-navbar-account");
btnShowNavbarAccount.addEventListener("click", showNavBarAccount);

const btnCloseContentNavbarAccount = document.getElementById("btn-close-content-navbar-account");
btnCloseContentNavbarAccount.addEventListener("click", showNavBarAccount);

const btnArrowAccountLGDown = document.getElementById("btn-arrow-account-lg-down");
btnArrowAccountLGDown.addEventListener("click", showNavBarAccount);

const btnHamburger = document.getElementById("btnHamburger");
btnHamburger.addEventListener("click", showSidenav);

const btnPlusCourse1 = document.getElementById("btn-plus-course-1");

const showContentDetailCourse1 = () => {
  const contentDetailCourse1 = document.getElementById(
    "content-details-course-1"
  );
  const courseDetails1 = document.getElementById("courses-details-1");
  const svgPlusCourse1 = document.getElementById("svg-plus-course-1");
  const svgMinusCourse1 = document.getElementById("svg-minus-course-1");
  const titleCourse = btnPlusCourse1.previousElementSibling;

  const loadingContent = document.createElement("div");
  loadingContent.classList.add(
    "px-4",
    "py-2",
    "flex",
    "justify-center",
    "items-center"
  );
  loadingContent.innerHTML = `<img src="./images/loading.gif" alt="loader" class="w-16">`;

  if (courseDetails1.classList.contains("hidden")) {
    contentDetailCourse1.appendChild(loadingContent);

    // Simular la espera de la API (3 segundos)
    setTimeout(() => {
      contentDetailCourse1.removeChild(loadingContent);

      titleCourse.classList.add("text-fap-red");
      courseDetails1.classList.remove("hidden");
      svgPlusCourse1.classList.add("hidden");
      svgMinusCourse1.classList.remove("hidden");
    }, 3000);
  } else {
    titleCourse.classList.remove("text-fap-red");
    courseDetails1.classList.add("hidden");
    svgMinusCourse1.classList.add("hidden");
    svgPlusCourse1.classList.remove("hidden");
  }
};

btnPlusCourse1.addEventListener("click", showContentDetailCourse1);

const menuItems = document.querySelectorAll(".menu-item");

let isLargeScreen = window.matchMedia("(min-width: 1024px)").matches; 

function handleMenuItems() {
  // Si la pantalla es pequeña, no hacemos nada
  if (!isLargeScreen) {
    // Eliminar los eventos si es pantalla pequeña
    menuItems.forEach((item) => {
      const subMenu = item.querySelector(".sub-nav-item");
      item.removeEventListener("mouseover", showSubMenu);
      item.removeEventListener("mouseout", hideSubMenu);
      
      const menuLink = item.querySelector("a");
      
      menuLink.removeEventListener("click", selectMenuItem);
      const subMenuLinks = subMenu.querySelectorAll("a");
      subMenuLinks.forEach((subMenuLink) => {
        subMenuLink.removeEventListener("click", selectMenuItem);
      });


      item.querySelector(".group").addEventListener("click", toggleSubMenu);

      
    });
    return;
  }

  // Si es pantalla grande, añadimos los eventos
  menuItems.forEach((item) => {
    const subMenu = item.querySelector(".sub-nav-item");

    item.addEventListener("mouseover", showSubMenu);
    item.addEventListener("mouseout", hideSubMenu);

    const menuLink = item.querySelector("a");
    menuLink.addEventListener("click", selectMenuItem);

    const subMenuLinks = subMenu.querySelectorAll("a");
    subMenuLinks.forEach((subMenuLink) => {
      subMenuLink.addEventListener("click", selectMenuItem);
    });



  });
}

// Función para mostrar el submenú
function showSubMenu() {
  const subMenu = this.querySelector(".sub-nav-item");
  subMenu.classList.remove("hidden");
}

// Función para ocultar el submenú
function hideSubMenu() {
  const subMenu = this.querySelector(".sub-nav-item");
  subMenu.classList.add("hidden");
}

function toggleSubMenu(e) {
  e.preventDefault(); // Prevenir el comportamiento de navegación si es necesario

  const menuItem = this.closest(".menu-item"); 
  const divContent = menuItem.querySelector("div"); 

  menuItems.forEach((i) => {
    const otherDivContent = i.querySelector("div"); 
    if (i !== menuItem) {
      otherDivContent.classList.remove('bg-fap-red', 'text-white');
    }
  });

  // Agregar las clases 'bg-fap-red' y 'text-white' al item seleccionado
  divContent.classList.add('bg-fap-red', 'text-white');  


  const subMenu = menuItem.querySelector(".sub-nav-item");
  
  // Alternar la clase 'hidden' en el submenú correspondiente
  subMenu.classList.toggle("hidden");

  // Cerrar otros submenús al hacer clic en uno
  menuItems.forEach((i) => {
    if (i !== this.closest(".menu-item")) {
      const otherSubMenu = i.querySelector(".sub-nav-item");
      // divContent.classList.remove('bg-fap-red', 'text-white') 
      otherSubMenu.classList.add("hidden");
    }
  });
}

// Función para manejar la selección del menú
function selectMenuItem(e) {
  e.preventDefault(); // Evitar el comportamiento por defecto del enlace
  
  // Eliminar la clase 'selected-menu' de todos los enlaces
  menuItems.forEach((item) => {
    const link = item.querySelector("span");
    link.classList.remove("selected-menu");
  });

  // Agregar la clase 'selected-menu' al enlace clicado
  const menuLink = e.target;
  menuLink.classList.add("selected-menu");
}

const showContentHelp = () => {
  const btnArrowUp = document.getElementById('btn-arrow-up')
  const btnArrowDown = document.getElementById('btn-arrow-down')
  const contentSubMenu = document.getElementById('content-sub-menu')

  const divContentMain = contentSubMenu.previousElementSibling
  const spanTitle = divContentMain.querySelector('span')

  if (contentSubMenu.classList.contains('hidden')) {
    spanTitle.classList.add('text-fap-red')
    contentSubMenu.classList.remove('hidden')

    btnArrowDown.classList.remove('block')
    btnArrowDown.classList.add('hidden')    

    btnArrowUp.classList.add('block')
    btnArrowUp.classList.remove('hidden')
  }else{
    contentSubMenu.classList.add('hidden')
    spanTitle.classList.remove('text-fap-red')
    
   btnArrowDown.classList.remove('hidden')
    btnArrowDown.classList.add('block')    
    
    btnArrowUp.classList.add('hidden')
    btnArrowUp.classList.remove('block')
  }
  // if (menu.classList.contains('opacity-0') && menu.classList.contains('translate-x-[-100%]')) {
  //   menu.classList.remove("hidden");
  //   menu.classList.remove('opacity-0', 'translate--[-100%]');
  //   menu.classList.add('opacity-100', 'translate-x-0');
  // } else {
  //   menu.classList.add("hidden");
  //   menu.classList.remove('opacity-100', 'translate-y-0');
  //   menu.classList.add('opacity-0', 'translate-y-[-100%]');
  // }
}

const btnShowIconHelp = document.getElementById('btn-show-icon-help');
btnShowIconHelp.addEventListener('click', showContentHelp)

// Inicializamos los eventos de acuerdo al tamaño de la pantalla
handleMenuItems();

document.addEventListener("DOMContentLoaded", () => {
  // const firstMenuLink = document.querySelector('a[href=""]');
  // if (firstMenuLink) {
  //   firstMenuLink.classList.add("selected-menu");
  // }

  // Detectar cambio de tamaño
  window.addEventListener("resize", () => {
    const currentIsLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (isLargeScreen !== currentIsLargeScreen) {
      isLargeScreen = currentIsLargeScreen; // Actualizar el tamaño de la pantalla
      handleMenuItems(); // Volver a configurar los eventos
    }
  });
});
