let isEnabled = false;

// Toggle the isEnabled state and update the extension icon and title
function toggleEnabled() {
  isEnabled = !isEnabled;
  chrome.storage.local.set({ 'isEnabled': isEnabled });
  updateIcon();
  setTimeout(() => {
    chrome.tabs.reload();
  }, 1000);
}

// Update the extension icon and title based on the isEnabled state
function updateIcon() {
  const icon = isEnabled ? 'icon-on.png' : 'icon-off.png';
  chrome.action.setIcon({ path: { '16': icon, '32': icon, '48': icon } });
  chrome.action.setTitle({ title: isEnabled ? 'Facebook Pip Blocker: Enabled' : 'Facebook Pip Blocker: Disabled' });
  chrome.action.setBadgeText({ text: isEnabled ? 'ON' : 'OFF' });
}

// Handle the extension icon click event to toggle the isEnabled state
chrome.action.onClicked.addListener((tab) => {
  toggleEnabled();
});

// Load the isEnabled state from local storage
chrome.storage.local.get('isEnabled', (data) => {
  isEnabled = data.isEnabled || false;
  updateIcon();
});

// Listen for tab updates to inject the content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (isEnabled && changeInfo.status === 'complete' && /^https?:\/\/(www\.)?facebook\.com\/.+\/videos\/.+$/i.test(tab.url)) {
    chrome.tabs.executeScript(tabId, { file: 'content.js' });
  }
});
