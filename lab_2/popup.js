// Отримуємо та застосовуємо збережене значення звуку при завантаженні розширення
document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get(['savedVolume'], function (data) {
    const savedVolume = data.savedVolume || 100; // Значення за замовчуванням — 100%
    document.getElementById('volumeSlider').value = savedVolume;
    document.getElementById('volumeValue').textContent = `${savedVolume}%`;

    // Виконуємо зміну звуку на збережене значення
    const volume = savedVolume / 100;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: boostVolume,
        args: [volume]
      });
    });
  });
});

// Обробка зміни значення повзунка
document.getElementById('volumeSlider').addEventListener('input', function () {
  const volume = this.value / 100; // Обчислення рівня звуку
  document.getElementById('volumeValue').textContent = `${this.value}%`;

  // Зберігаємо нове значення звуку в chrome.storage
  chrome.storage.sync.set({ savedVolume: this.value });

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
    media.volume = volume; // Збільшення гучності до максимуму 100%
  });
}
