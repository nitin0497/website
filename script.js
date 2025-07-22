
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.dropdown-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    });
  });
});
