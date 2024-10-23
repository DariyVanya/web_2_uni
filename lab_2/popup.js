document.getElementById('volumeSlider').addEventListener('input', function () {
    const volume = this.value / 100; // Volume adjustment
    document.getElementById('volumeValue').textContent = `${this.value}%`;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: boostVolume,
        args: [volume]
      });
    });
  });
  
  function boostVolume(volume) {
    const mediaElements = document.querySelectorAll('video, audio');
    mediaElements.forEach(media => {
      media.volume = Math.min(volume , 1); // Boost volume by up to 200%
    });
  }
  