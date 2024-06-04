chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateVolume') {
    const mediaElements = document.querySelectorAll('audio, video');
    if (mediaElements.length > 0) {
      mediaElements.forEach(mediaElement => {
        mediaElement.volume = message.volume;
      });
      sendResponse({ status: 'success' });
    } else if (window.location.hostname.includes('spotify.com')) {
      const spotifyVolumeControl = document.querySelector('.volume-bar'); // Spotify ses kontrolünü seçiyoruz
      if (spotifyVolumeControl) {
        spotifyVolumeControl.value = message.volume * 100; // Ses seviyesini % olarak ayarlıyoruz
        const event = new Event('input', { bubbles: true }); // Olayı tetikliyoruz
        spotifyVolumeControl.dispatchEvent(event);
        sendResponse({ status: 'success' });
      } else {
        sendResponse({ status: 'fail' });
      }
    } else {
      sendResponse({ status: 'fail' });
    }
  }
});
