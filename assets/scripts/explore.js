// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let voiceSelect = document.getElementById('voice-select');
  let voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const opt = document.createElement('option');
    opt.textContent = `${voices[i].name} (${voices[i].lang})`;

    opt.setAttribute('data-lang', voices[i].lang);
    opt.setAttribute('data-name', voices[i].name);

    voiceSelect.appendChild(opt);
  }

  let btn = document.querySelector('button');
  let text = document.getElementById('text-to-speak');
  btn.addEventListener('click', function() {
    let utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = voices[1];
    speechSynthesis.speak(utterance);
    //console.log(`${text}`);
  });
}