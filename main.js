function menuOpen(){
  
    document.querySelector(".side-menu").classList.add('menu-open');
      
  }
  
    document.querySelector("#hamburger-menu").addEventListener('click', menuOpen);
  
    
  
  function menuClose(){
    
   
      document.querySelector('.side-menu').classList.remove('menu-open');
    
  }
  
  document.getElementById('menu-close').addEventListener('click', menuClose);
  
  document.querySelector(".in-between-background").addEventListener('click', menuClose)