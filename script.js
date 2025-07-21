

    // Mobile menu toggle
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('show');
      
      const icon = document.querySelector('.menu-toggle i');
      if (menu.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('show');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
      });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Animate elements when scrolling
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate__animated');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          const animation = element.classList[1].split('animate__')[1];
          element.classList.add(`animate__${animation}`);
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
