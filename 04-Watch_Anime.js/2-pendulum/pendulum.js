let animation = anime({
    targets: "#pendulum_rod",
    rotate: [30, -30],
    duration: 3000,
    direction: "alternate",
    easing: "easeInOutSine", //easeOutInBounce
    loop: true,
});