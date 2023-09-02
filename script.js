
var tl = gsap.timeline();

tl.from(".nav img",{
      y:-100,
      duration : 1,
      opacity:0,
      stagger:0.2
})

gsap.from(".nav-part-1 h2",{
    y:-100,
    duration:1,
    stagger:0.2,
    opacity:0
})

gsap.from(".nav-part-2 h3",{
    y:-100,
    duration:1,
    stagger:0.2,
    opacity:0
})

gsap.from(".nav-part-2 button",{
    y:-100,
    duration:1,
    stagger:0.1,
    opacity:0
})

tl.from(".content",{
    y:100,
    duration:1,
    stagger:0.2,
    opacity:0
})

tl.from(".f1,.f2",{
    // y:100,
    scale:0,
    duration:1,
    stagger:0.2,
    opacity:0
    // rotate:360

})

tl.from("h5",{
   scale:0,
   opacity:0,
})

tl.to("h5",{
    y:40,
    duration:0.8,
    yoyo:true,
    repeat:-1
})





