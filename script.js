
document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.dropdown-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(){
      const content = this.nextElementSibling;
      content.classList.toggle('open');
    });
  });
});
