chrome.storage.local.get('isEnabled', ({ isEnabled }) => {
  if (isEnabled) {
    setInterval(function() {
      // Target the specific PiP close button using its aria-label
      let closeBtn = document.querySelector('[aria-label="Close Video and scroll"]');
      if (closeBtn) {
        closeBtn.click();
        console.log("Closed PiP video");
      }
    }, 1000); // Keep checking every second but only act when PiP is detected
  }
});
