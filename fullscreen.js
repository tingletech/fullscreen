  // http://davidwalsh.name/fullscreen
  // Find the right method, call on correct element
  function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }

  // Whack fullscreen
  function cancelFullscreen() {
    if(document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }

  // https://github.com/martinaglv/jQuery-FullScreen/blob/master/fullscreen/jquery.fullscreen.js
  function supportFullScreen(){
    var doc = document.documentElement;
    return ('requestFullscreen' in doc) ||
      ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
      ('webkitRequestFullScreen' in doc);
  }

  function fullScreenStatus(){
    return document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      false;
  }

  function toggleFullScreen(){
    if (fullScreenStatus()) {
      cancelFullscreen();
    } else {
      launchFullScreen(document.documentElement);
    }
    return false;
  }

  if (supportFullScreen()) {
    document.body.innerHTML = '<div id="fs-toggle" onclick="toggleFullScreen();">toggle fullscreen</div>' + document.body.innerHTML;
  }

