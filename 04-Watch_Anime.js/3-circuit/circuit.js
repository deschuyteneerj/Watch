let path = anime.path("#svg-path path");
anime({
    targets: "#object1",
    translateX: path("x"),
    translateY: path("y"),
    duration: 5000,
    easing: "linear", //easeOutInBack
    loop: true,
});