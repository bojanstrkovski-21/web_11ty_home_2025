const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropwdown_menu');

toggleBtn.onClick = function () {
    dropDownMenu.classList.toggle('open')
}