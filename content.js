setInterval(function() {  
  let closeBtn = document.querySelector('[aria-label^="Close"]');
  if (closeBtn) {
    closeBtn.click();
  }
}, 1000);
