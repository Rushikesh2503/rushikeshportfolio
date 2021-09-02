import React from 'react'
import Particles from 'react-particles-js'

const Part2 = () => {
    return (
        <Particles style={{
                  width: "100%",
                  height:"100%",
                  position: "absolute",
                }}
                params={{
                  particles: {
                    number: {
                      value: 170,
                      density: {
                        enable: false
                      }
                    },
                    color: { value: "#e6ff56" },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        speed: 4,
                        size_min: 1
                      }
                    },
                    line_linked: {
                      enable: false
                    },
                    move: {
                      random: true,
                      speed: 1,
                      direction: "top",
                      out_mode: "out"
                    }
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble"
                      },
                      onclick: {
                        enable: true,
                        mode: "repulse"
                      }
                    },
                    modes: {
                      bubble: {
                        distance: 150,
                        duration: 2,
                        size: 4,
                        opacity: 1
                      },
                      repulse: {
                        distance: 400,
                        duration: 4
                      }
                    }
                  }
                }}/>
    )
}

export default Part2
