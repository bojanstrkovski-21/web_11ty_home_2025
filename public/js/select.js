const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar li a').
forEach(link => {
 if(link.href.includes(`${activePage}`)){
  link.classList.add('active');
 }
})



const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')



toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
}






