import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./ConfigPart/ParticleConfig";

export default function ParticleBg() {
  return <Particles
        params={{
          particles: {
            number: {
              value: 66,
              density: { enable: true, value_area: 1262.6362266116362 }
            },
            color: { value: "#62d2bf" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#99ced7" },
              polygon: { nb_sides: 6 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.7856719098241062,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 5.684540486109416,
                sync: true
              }
            },
            line_linked: {
              enable: true,
              distance: 176.3753266952075,
              color: "#62d2bf",
              opacity: 0.2725800503471389,
              width: 2,
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 0
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 2004.2650760819035,
                  rotateY: 881.8766334760375
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: {
                  distance: 158.35505639876231,
                  line_linked: { opacity: 0.2714664122011815 }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            }
          }
        }}
        style={{
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(circle, rgba(45,45,45,1) 0%, rgba(56,56,56,1) 100%)",
          zIndex: 0,
          position: "absolute"
        }}
      />
}
