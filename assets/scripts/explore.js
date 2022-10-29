// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let voices = [];
  let utterance = new SpeechSynthesisUtterance();
  const synth = window.speechSynthesis;
  function populateVoiceList() {
    let voiceSelect = document.getElementById('voice-select');
    voices = speechSynthesis.getVoices();
    /*voiceSelect.addEventListener('click', function () {
      console.log(voices.length);
    })*/
    for (let i = 0; i < voices.length; i++) {
      const opt = document.createElement('option');
      opt.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      opt.setAttribute('data-lang', voices[i].lang);
      opt.setAttribute('data-name', voices[i].name);
  
      voiceSelect.appendChild(opt);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let voiceSelect = document.getElementById('voice-select');
  //const voices = speechSynthesis.getVoices();
  
  let btn = document.querySelector('button');
  let text = document.getElementById('text-to-speak');
  btn.addEventListener('click', function() {
    utterance = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
    const image = document.querySelector('img');
    utterance.onstart = function() {
      if (speechSynthesis.speaking === true) {
        image.src = "assets/images/smiling-open.png";
      }
    }
    utterance.onend = function() {
      if (speechSynthesis.speaking === false) {
        image.src = "assets/images/smiling.png";
      }
    }
  });
  
  utterance.onstart = function() {
    image.src = "assets/images/smiling-open.png";
  }
  
  image.src = "assets/images/smiling.png";
}
