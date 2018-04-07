var buttonMobile = document.getElementById('mobile-menu-button');
var menuDropdownMobile = document.getElementById('header__mobile-dropdown');

buttonMobile.onclick = function() {
  buttonMobile.classList.toggle('mobile-menu-button_active');
  menuDropdownMobile.classList.toggle('header__mobile-dropdown_open');
}

var collapseWrap = document.getElementsByClassName('collapse-wrap');
      
for (var i = 0; i < collapseWrap.length; i++) {

collapseWrap[i].addEventListener("click", collapse, false);

collapseWrap[i].onmousedown = function(event){	
  collapseWrap[i].onmouseup = function(){
    collapseWrap[i].click = null;
  }
}

}

function collapse() {
if (this.classList.contains('open')) {
  for (var i = 0; i < collapseWrap.length; i++) {
    this.classList.remove('open');
  }          
} else {
  this.classList.add('open');
}
}

