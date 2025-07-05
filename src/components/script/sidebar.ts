const sidebar = document.getElementById('sidebar');
const buttons = document.querySelectorAll('[data-sidebar]');

buttons.forEach(btn => {
  
  btn.addEventListener('click', ()=>{
    sidebar?.classList.toggle('isActive');
  })
})