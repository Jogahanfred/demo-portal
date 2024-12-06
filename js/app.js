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

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => { 
    const subMenu = item.querySelector('.sub-nav-item');
 
    item.addEventListener('mouseover', () => { 
        subMenu.classList.remove('hidden');  
    });

    item.addEventListener('mouseout', () => { 
        subMenu.classList.add('hidden');  
    }); 

    
    const menuLink = item.querySelector('a');
    menuLink.addEventListener('click', (e) => {
        e.preventDefault(); 

        menuItems.forEach(i => {
            const link = i.querySelector('a');
            link.classList.remove('selected-menu');
        });

        menuLink.classList.add('selected-menu');
    });
    
  const subMenuLinks = subMenu.querySelectorAll('a');
  subMenuLinks.forEach(subMenuLink => {
      subMenuLink.addEventListener('click', (e) => {
          e.preventDefault(); 
 
          menuItems.forEach(i => {
              const link = i.querySelector('a');
              link.classList.remove('selected-menu');
          });
 
          menuLink.classList.add('selected-menu');
      });
  });
});
 
document.addEventListener('DOMContentLoaded', () => {
    const firstMenuLink = document.querySelector('a[href=""]'); 
    if (firstMenuLink) {
        firstMenuLink.classList.add('selected-menu');
    }
});

