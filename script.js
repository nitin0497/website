
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.dropdown-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.classList.toggle('active');
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    });
  });
});
