
document.addEventListener('DOMContentLoaded', function(){
  // Dropdown toggle
  const buttons = document.querySelectorAll('.dropdown-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(){
      const content = this.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  if(hamburger && sidebar){
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
});
