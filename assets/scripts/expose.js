// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  let drop_down = document.getElementById("horn-select");
  let image = document.querySelector('img');
  let audio = document.querySelector('.hidden');
  let vol = document.querySelector('#volume-controls input');
  let volImg = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti()


  drop_down.addEventListener('input', function() {
    let horn_type = drop_down.value;
    //audio.volume = volValue;
    if (horn_type == "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (horn_type == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (horn_type == "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  vol.addEventListener('input', function () {
    let volValue = vol.value;
    //onsole.log(typeof(audio));
    audio.volume = volValue / 100;
    //console.log(volValue);
    if (volValue == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volValue > 0 && volValue <= 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volValue > 33 && volValue <= 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
  })

  let play_button = document.querySelector("button");
  play_button.addEventListener('click', function() { 
    let horn_type = drop_down.value;
    console.log("PLAYING SOUND NOW!!!!");
    if (horn_type == 'party-horn') {
      jsConfetti.addConfetti(); 
    }
    audio.play(); 
  });
}
