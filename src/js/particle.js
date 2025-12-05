if(document.querySelectorAll('.particle-container')){
document.querySelectorAll('.particle-container').forEach((container, index) => {
    let particleDiv = container.querySelector('#particles-js')
    // Assign unique ID to each particle container
    const uniqueId = `particles-js-${index + 1}`
    particleDiv.id = uniqueId;

    particlesJS(uniqueId, {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#7125CF" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#7125CF", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    })
})
}else{ null }