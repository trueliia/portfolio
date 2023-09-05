gsap.to(".introduction", {
    text: "Hello! I am Julia Naumova. I am a Front-End Web Developer.",
    duration:3,
    ease: "power1.in",
    delay: 2,
})
gsap.fromTo('.me', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 0.7, opacity: 1, scale: 1, rotation: 0 })
gsap.from('.btn', { duration: 2, delay: 3.5, y: -400, ease: 'power2.in', opacity: 0 })
gsap.from('.socialMedia', { duration: 2, delay: 1.2, x: -400, ease: 'power2.in', opacity: 0 })
gsap.from('.btn2', { duration: 2, delay: 1.2, x: 400, ease: 'power2.in', opacity: 0 })
gsap.from('.websites', { duration: 2, delay: 0.2, y: 400, ease: 'power2.in', opacity: 0 })
gsap.from('.heading', { duration: 1, delay: 0.2, x: 400, ease: 'power2.in', opacity: 0 })
gsap.fromTo('.skill4', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 0.7, opacity: 1, scale: 1, rotation: 0 })
gsap.from('.skill1', { duration: 2, x: -400, y:200, ease: 'power2.in', opacity: 0 })
gsap.from('.skill2', { duration: 2, x: 400, y:-500, ease: 'power2.in', opacity: 0 })
gsap.from('.skill3', { duration: 2, y:-500, ease: 'power2.in', opacity: 0 })
gsap.from('.skill5', { duration: 2, x: -400, y:-200, ease: 'power2.in', opacity: 0 })
gsap.from('.skill6', { duration: 2, x: -400, y:500, ease: 'power2.in', opacity: 0 })

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#64DFDF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
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
  