function toggleDisplay(){
  var el = document.getElementById('navbarNav');
  if (el.classList.contains('collapse')) {
    el.classList.remove('collapse');
  } else if(!el.classList.contains('collapse')) {
    el.classList.add('collapse');
  }
} 