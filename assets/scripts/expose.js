// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let drop_down = document.getElementById("horn-select");
  let image = document.querySelector('img');
  drop_down.addEventListener('input', function() {
    let horn_type = drop_down.value;
    if (horn_type == "air-horn") {
      image.src = "assets/images/air-horn.svg";
    }
    else if (horn_type == "car-horn") {
      image.src = "assets/images/car-horn.svg";
    }
    else if (horn_type == "party-horn") {
      image.src = "assets/images/party-horn.svg";
    }
  });
  let vol = document.querySelector('#volume-controls input');
  let volImg = document.querySelector('#volume-controls img');
  vol.addEventListener('input', function () {
    let volValue = vol.value;
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
}
