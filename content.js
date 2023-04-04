console.log("Madarchod");
setInterval(function() {
  console.log("Tera maka bhosra");
  let closeBtn = document.querySelector('[aria-label^="Close"]');
  if (closeBtn) {
    closeBtn.click();
  }
}, 1000);
