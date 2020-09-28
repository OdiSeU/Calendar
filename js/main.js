window.onload = function() {
  let topBar = document.querySelector('#top-bar-container');
  let leftBar = document.querySelector('#left-bar-container');
  let rightBar = document.querySelector('#right-bar-container');

  let resizeBars = document.getElementsByClassName('resize-bar');
  let leftResizeBar = resizeBars[0];
  let rightResizeBar = resizeBars[1];

  leftResizeBar.onmousemove = function(e) {
    if(e.buttons == 1) {
      this.parentNode.style.width = (e.x + this.offsetWidth/2) + 'px';
    }
  }

  clock = new Clock(document.getElementById('clock'));
  clock.start();
}
