chrome.storage.local.get('isEnabled', ({ isEnabled }) => {
  if (isEnabled) {
    setInterval(function() {
      let closeBtn = document.querySelector('[aria-label^="Close"]');
      if (closeBtn) {
        closeBtn.click();
        console.log("Gaand");
      }
    }, 1000);
  }
});
