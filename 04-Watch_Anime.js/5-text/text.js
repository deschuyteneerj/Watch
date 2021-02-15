document.addEventListener('DOMContentLoaded', ()=>{
    anime.timeline({ //Timeline of animations
        easing: 'easeOutExpo',
    })
    .add({ //First animation displayed
        targets: '.blue_bg',
        left: ['100%'], //-100%
        duration: 3000,
        delay: (el,i)=>i*200
    })
    .add({ //Second animation displayed
        targets: '.text',
        top: ['75%', '50%'],
        opacity: [0,1],
        duration: 1200,
        delay: (el, i)=>i*100,
        offset: '-=1600' //Starts 1600ms before the first animation ends
    })
});