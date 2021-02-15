    anime({
        targets: "#ball1, #ball2",
        keyframes: [
            { translateX: 250 },
            { translateY: 150 },
            { translateX: 0 },
            { translateY: 0 },
        ],
        duration: 5000,
        easing: "easeOutElastic(1, .8)",
        loop: true,
    });