// content.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'updateVolume') {
      const mediaElements = document.querySelectorAll('audio, video');
      mediaElements.forEach(mediaElement => {
        mediaElement.volume = message.volume / 600;
      });
      sendResponse({ status: 'success' });
    }
  });
  