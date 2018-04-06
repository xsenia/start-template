var buttonMobile = document.getElementById('mobile-menu-button');
var menuDropdownMobile = document.getElementById('header__mobile-dropdown');

buttonMobile.onclick = function() {
  buttonMobile.classList.toggle('mobile-menu-button_active');
  menuDropdownMobile.classList.toggle('header__mobile-dropdown_open');
}