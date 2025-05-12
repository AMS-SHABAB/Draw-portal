 const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
