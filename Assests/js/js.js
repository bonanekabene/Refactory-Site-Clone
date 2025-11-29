 // Wait for DOM
  document.addEventListener('DOMContentLoaded', function(){
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const iconBars = document.getElementById('icon-bars');
    const iconClose = document.getElementById('icon-close');

    // clean toggle function
    function openMenu(){
      navMenu.classList.add('show');
      navToggle.setAttribute('aria-expanded','true');
      iconBars.style.display = 'none';
      iconClose.style.display = 'block';
      navToggle.setAttribute('aria-label','Close navigation');
    }
    function closeMenu(){
      navMenu.classList.remove('show');
      navToggle.setAttribute('aria-expanded','false');
      iconBars.style.display = 'block';
      iconClose.style.display = 'none';
      navToggle.setAttribute('aria-label','Open navigation');
    }

    navToggle.addEventListener('click', function(){
      if(navMenu.classList.contains('show')) closeMenu();
      else openMenu();
    });

    // Close menu when clicking outside the navMenu area (optional)
    document.addEventListener('click', function(e){
      if(!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('show')){
        closeMenu();
      }
    });

    // Optional: close on ESC
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && navMenu.classList.contains('show')) closeMenu();
    });
  });