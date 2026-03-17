/*
  Configuração padrão para particles.js.
  Você pode customizar os valores para mudar o comportamento e o visual das partículas.
*/
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 20, // Número de partículas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Cor das partículas
    },
    "shape": {
      "type": "star", // Tipo de forma (circle, edge, triangle, polygon, star, image)
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5, // Opacidade das partículas
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Tamanho das partículas
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true, // Conectar partículas com linhas
      "distance": 150, // Distância para conectar
      "color": "#ffffff", // Cor das linhas
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, // Velocidade de movimento
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out", // Comportamento ao sair da tela
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Efeito ao passar o mouse (grab, bubble, repulse)
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Efeito ao clicar (push, remove, bubble, repulse)
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});