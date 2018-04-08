//header-mobile-menu
var buttonMobile = document.getElementById('mobile-menu-button');
var menuDropdownMobile = document.getElementById('header-mobile-dropdown');

buttonMobile.onclick = function() {
  buttonMobile.classList.toggle('mobile-menu-button_active');
  menuDropdownMobile.classList.toggle('header-mobile-dropdown_open');
}



//collapse-block
var collapseHeader = document.getElementsByClassName('collapse__header');      
for (var i = 0; i < collapseHeader.length; i++) {
  collapseHeader[i].addEventListener("click", collapse, false);
}
function collapse() {
  parent = this.parentNode;
  if (parent.classList.contains('open')) {
    for (var i = 0; i < collapseHeader.length; i++) {
      parent.classList.remove('open');
    }          
  } else {
    parent.classList.add('open');
  }
}

